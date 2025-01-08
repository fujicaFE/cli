import {Args, Command, Flags} from '@oclif/core'
import * as cp from 'copy-paste'
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
    // flag with a value (-n, --name=VALUE)
    platform: Flags.string({char: 'p', default: 'mobile', description: 'generate from which platform(manage/mobile)'}),
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
    pay: 'https://gatewayservicev2.fujica.com.cn/payment/callback/v2/api-docs',
  }

  public async run(): Promise<void> {
    this.mainURL = this.urlMap.mobile // 默认移动端
    const {args, flags} = await this.parse(ApiIndex)

    if (flags.platform) {
      this.mainURL = this.urlMap[flags.platform]
      this.log(`get api from ${flags.platform}`)
      fetch(this.mainURL)
        .then((res) => res.json())
        .then(async (data) => {
          this.log(data.info.title)
          const funcStr = await this.swag2Code(data)
          cp.copy(funcStr)
          this.logJson(data.paths[args.api])
        })
    }

    if (args.api && flags.force) {
      this.log(`you input --force and --file: ${args.api}`)
    }
  }

  private async swag2Code(data) {
    const {args, flags} = await this.parse(ApiIndex)
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
      // 去除路径中的花括号部分，获取最后一个非花括号部分作为接口名
      const lastPathPart = path
        .split('/')
        .filter((part) => !part.startsWith('{'))
        .pop()

      // 根据规则生成接口名：I + 请求方法名 + 接口最后一个单词
      const interfaceName = `I${method.toUpperCase()}${lastPathPart}`

      const interfaceDefinition = [`interface ${interfaceName} {`]

      for (const param of params) {
        const type = param.type === 'integer' ? 'number' : param.type
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
        const interfaceDefinition = [`interface ${interfaceName} {`];

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
          }
      
          // 添加注释和字段定义
          const fieldDescription = description ? `/** ${description} */\n  ` : '';
          interfaceDefinition.push(`${fieldDescription}${property}: ${tsType};`);
        });
      
        interfaceDefinition.push('}');
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

      // 根据规则生成函数名：请求方法名 + 接口最后一个单词
      const funcName = `${method.toLowerCase()}${lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1)}`

      // 根据规则生成接口类型：I + 方法名 + 接口最后一个单词
      const interfaceName = `I${method.toUpperCase()}${lastPathPart}`

      // 加入 summary 作为注释
      const comment = summary ? `/** ${summary} */` : ''

      return `
${comment}
export const ${funcName} = (data: ${interfaceName}): Promise<${getInterfaceName(path, method)}> => {
  return http({
    url: '${path.replace('/mobile', '')}',
    method: '${method.toUpperCase()}',
    data
  });
};
  `
    }


    // 生成 TypeScript 接口和请求函数
    for (const path of Object.keys(apiDoc)) {
      const methods = apiDoc[path]

      // 遍历每种请求方法（GET、POST、PUT、DELETE）
      for (const method of Object.keys(methods)) {
        const methodDetails = methods[method]
        const params = methodDetails.parameters
        const summary = methodDetails.summary || ''
        const responseSchema = methodDetails.responses[200].schema

        // 生成请求类型
        const interfaceCode = generateRequestInterface(path, method, params)
        types.push(interfaceCode)

        // 生成请求类型
        const interfaceCodeRes = generateResponseInterface(responseSchema, getInterfaceName(path, method))
        types.push(interfaceCodeRes)

        // 生成请求函数
        const functionCode = generateRequestFunction(path, method, params, summary)
        types.push(functionCode)
      }
    }

    console.log('TypeScript 接口和请求函数已生成！')
    return types.join('\n')
  }
}
