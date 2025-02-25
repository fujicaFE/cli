import {Args, Command, Flags} from '@oclif/core'
import * as cp from 'copy-paste'
import inquirer from 'inquirer'
import {pickBy} from 'lodash-es'

export default class ApiIndex extends Command {
  static override args = {
    api: Args.string({description: 'API URL', required: false}),
  }

  static override description = 'Convert API to code'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-p, --platform=VALUE)
    lang: Flags.string({char: 'l', default: 'js', description: 'choose api language(js/ts)'}),
    // flag with a value (-p, --platform=VALUE)
    platform: Flags.string({char: 'p', default: 'mobile', description: 'get api from which platform(manage/mobile)'}), // 默认移动端
  }

  apiToCamelCase = (apiName: string) => {
    // 将 API 名称按斜杠和下划线分割
    const parts = apiName.split(/[/\\_-]/g)
    // 将每个部分的首字母大写，然后连接起来
    const camelCaseParts = parts.map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    // 连接所有部分
    return camelCaseParts.join('')
  }

  mainURL = ''

  urlMap = {
    manage: 'https://gatewayservicev2.fujica.com.cn/transfer/manage/v2/api-docs',
    mobile: 'https://gatewayservicev2.fujica.com.cn/transfer/mobile/v2/api-docs',
    // richMerchant: 'https://gatewayservicev2.fujica.com.cn/transfer/richMerchant/v2/api-docs',
    pay: 'https://gatewayservicev2.fujica.com.cn/payment/callback/v2/api-docs',
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ApiIndex)
    this.mainURL = this.urlMap[flags.platform]

    /* 非空 */
    if (!args.api) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'api',
          message: '请输入API，如 [/mobile/member]等',
        },
      ])
      if (answers.api) args.api = answers.api
    }
    /* 合法 */
    if (!args.api.startsWith('/')) {
      this.warn('API参数应以/开头')
    }
    /* 转发 */
    if (args.api.startsWith('/transfer')) {
      args.api = args.api.replace('/transfer', '')
    }
    /* 平台 */
    if (args.api.startsWith('/mobile')) {
      flags.platform = 'mobile'
    } else if (args.api.startsWith('/manage')) {
      flags.platform = 'manage'
      args.api = args.api.replace('/manage', '')
    }
    /* 无转发无平台 */
    if (!args.api.startsWith('/transfer') && !args.api.startsWith('/mobile') && !args.api.startsWith('/manage')) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'platform',
          message: '请选择平台',
          choices: ['manage', 'mobile'],
        },
      ])
      if (answers.platform) {
        flags.platform = answers.platform
        if (flags.platform != 'manage') args.api = `/${flags.platform}` + args.api
      } else {
        throw new Error('平台为必填项')
      }
    }

    this.mainURL = this.urlMap[flags.platform]
    this.log(`get api from ${flags.platform}`)
    fetch(this.mainURL)
      .then((res) => res.json())
      .then(async (data) => {
        this.log(data.info.title)
        const funcStr = await this.swag2Code(data, args, flags)
        cp.copy(funcStr)
        this.logJson(data.paths[args.api])
      })

    if (args.api && flags.force) {
      this.log(`you input --force and --file: ${args.api}`)
    }
  }

  private async swag2Code(data, args, flags) {
    // const {args, flags} = await this.parse(ApiIndex)
    console.log("🚀 ~ args.api:", args.api)
    const apiDoc = args.api ? pickBy(data.paths, (val, key) => key.startsWith(args.api)) : data.paths
    const apiDef = data.definitions
    // this.log('apiDoc', apiDoc)
    const types = []

    const getInterfaceName = (path, method) => {
      const lastPathPart = path.split('/').filter((part) => !part.startsWith('{')).pop()
      const methodName = method.toLowerCase()
      return `IRes${methodName.charAt(0).toUpperCase() + methodName.slice(1)}${lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1)}`
    }

    const generateRequestInterface = (path, method, params = []) => {
      // 去除路径中的花括号部分，获取最后一个非花括号部分作为接口函数名
      const lastPathPart = path
        .split('/')
        .filter((part) => !part.startsWith('{'))
        .pop()

      // 根据规则生成接口名：I + 请求方法名 + 接口最后一个单词
      const interfaceName = `I${method.toUpperCase()}${lastPathPart}`

      const interfaceDefinition = [`interface ${interfaceName} {`]

      for (const param of params) {
        const type = transferType(param.type)
        const description = param.description ? `/** ${param.description} */` : ''
        interfaceDefinition.push(`  ${description}\n  ${param.name}: ${type};`)
      }

      interfaceDefinition.push('}')
      return interfaceDefinition.join('\n')

    }

    const generateResponseInterface = (responseSchema, interfaceName) => {
      // 获取 originalRef 并找到对应的类型定义
      const typeName = responseSchema?.originalRef?.replace('#/definitions/', '') || '';
      const typeDefinition = apiDef[typeName];

      // 如果找到类型定义，则生成对应的接口
      if (typeDefinition) {
        const { title, properties } = typeDefinition;
        const interfaceDefinition = [`type ${interfaceName} = IApiData<{`];

        const matchList = responseSchema?.originalRef.startsWith('R«List«')
        const matchR = responseSchema?.originalRef.startsWith('R«')
        const matchPage = responseSchema?.originalRef.startsWith('Page«') || responseSchema?.originalRef.startsWith('PageDto«')

        if (matchList) {
          return generateResponseInterface(properties?.data?.items, interfaceName)
        } else if (matchR) {
          return generateResponseInterface(properties?.data, interfaceName)
        } else if (matchPage) {
          return generateResponseInterface(properties?.records?.items, interfaceName)
        }

        // 遍历所有的属性，生成每个字段的类型
        Object.keys(properties).forEach(property => {
          const { type, format, description } = properties[property];
          let tsType = type;

          // 根据格式调整类型
          tsType = transferType(type, format)

          // 添加注释和字段定义
          const fieldDescription = description ? `/** ${description} */\n  ` : '';
          interfaceDefinition.push(`${fieldDescription}${property}: ${tsType};`);
        });

        interfaceDefinition.push('}>');
        return interfaceDefinition.join('\n');
      }

      // 如果没有找到对应的类型定义，返回一个空接口
      return `interface ${interfaceName} {}`;
    }

    const generateRequestFunction = (path, method, params, summary) => {
      // 去除路径中的花括号部分，获取最后一个非花括号部分作为函数名
      const lastPathPart = path
        .split('/')
        .filter((part) => !part.startsWith('{'))
        .pop()
      // 根据规则生成函数名：最后一个单词（JS） / 请求方法名 + 接口最后一个单词（TS）
      const funcName = args.api ? `${lastPathPart}` : `${method.toLowerCase()}${lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1)}`
      // 根据规则生成接口类型：I + 方法名 + 接口最后一个单词（TS）
      const interfaceName = `I${method.toUpperCase()}${lastPathPart}`
      const reqDataKey = (flags.platform === 'manage' && method.toUpperCase() == 'GET') ? 'params' : 'data'
      const reqMethodKey = flags.platform === 'manage' ? 'request' : 'http'
      return flags.lang === 'ts' ? `export const ${funcName} = (${reqDataKey}: ${interfaceName}): ${getInterfaceName(path, method)} => {
  return ${reqMethodKey}({
    url: \`${path.replace(`/${flags.platform}`, '')}\`,
    method: '${method.toUpperCase()}',
    ${reqDataKey}
  })
}
` : `export const ${funcName} = (${reqDataKey}) => {
  return ${reqMethodKey}({
    url: \`${path.replace(`/${flags.platform}`, '')}\`,
    method: '${method.toUpperCase()}',
    ${reqDataKey}
  })
}
`;
    }

    const generateComment = (params = [], responseSchema, summary) => {
      if (flags.lang === 'ts') {
        return summary ? `/** ${summary} */` : ''
      } else {
        const paramsDefinition = []
        for (const param of params) {
          const type = transferType(param.type)
          paramsDefinition.push(`@param {${type}} params.${param.name} ${param.description || ''}`)
        }
        return `/**
 * ${summary}
 * @param {object} params 参数对象
 * ${paramsDefinition.join('\n * ')}
 * @returns
 * */`
      }
    }

    const transferType = (type, format?) => {
      let tsType = type
      // 根据格式调整类型
      if (format === 'int64') {
        tsType = 'number';
      } else if (format === 'int32') {
        tsType = 'number';
      } else if (type === 'integer') {
        tsType = 'number';
      } else if (type === 'string') {
        tsType = 'string';
      } else if (type === 'boolean') {
        tsType = 'boolean';
      } else if (type === 'array') {
        if (flags.lang === 'ts') {
          tsType = '[]';
        } else {
          tsType = 'array';
        }
      } else if (type === 'file') {
        tsType = 'File';
      }
      return tsType
    }

    let count = 0
    // 生成 TypeScript 接口和请求函数
    for (const path of Object.keys(apiDoc)) {
      const methods = apiDoc[path]
      // 遍历每种请求方法（GET、POST、PUT、DELETE）
      for (const method of Object.keys(methods)) {
        const methodDetails = methods[method]
        const params = methodDetails.parameters
        const summary = methodDetails.summary || ''
        const responseSchema = methodDetails.responses[200].schema
        if (flags.lang === 'ts') {
          // 生成请求类型
          const interfaceCode = generateRequestInterface(path, method, params)
          types.push(interfaceCode)
          // 生成响应类型
          const interfaceCodeRes = generateResponseInterface(responseSchema, getInterfaceName(path, method))
          types.push(interfaceCodeRes)
        }

        // 加入 summary 作为注释
        const comment = generateComment(params, responseSchema, summary)
        types.push(comment)

        // 生成请求函数
        const functionCode = generateRequestFunction(path, method, params, summary)
        types.push(functionCode)
        count++
      }
    }
    if (count === 0) {
      this.log('未找到任何接口')
      return
    }

    if (flags.lang === 'ts') {
      const commonTypeDef = `
      /* 接口泛型定义 */
      type IApiData<T> = Promise<Omit<IResData, 'data'> & { data: T }> // 单条数据
      type IApiList<T> = Promise<Omit<IResData, 'data'> & { data: T[] }> // 列表
      type IApiPage<T> = Promise<Omit<IResData, 'data'> & { data: IPagination<T> }> // 分页
      interface IPagination<T> {
        records: T[];     // 记录的数组
        total: number;    // 总记录数
        current: number;  // 当前页数
        size: number;     // 每页条数
      }
      `
      types.unshift(commonTypeDef)
    }
    if (flags.platform === 'manage') {
      types.unshift(`import request from '@/utils/request'\n`)
    }

    console.log(`${flags.lang}接口和请求函数已复制到剪贴板！`)
    return types.join('\n')
  }
}
