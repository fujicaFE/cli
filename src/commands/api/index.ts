import {Args, Command, Flags} from '@oclif/core'
import * as cp from 'copy-paste'

export default class ApiIndex extends Command {
  static override args = {
    api: Args.string({description: 'API URL', required: false }),
  }

  static override description = 'Convert API to code'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    platform: Flags.string({char: 'p', default: 'mobile', description: 'generate from which platform(manage/mobile)' }),
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

  urlMap = ({
    manage: 'https://gatewayservicev2.fujica.com.cn/transfer/manage/v2/api-docs',
    mobile: 'https://gatewayservicev2.fujica.com.cn/transfer/mobile/v2/api-docs',
    pay: 'https://gatewayservicev2.fujica.com.cn/payment/callback/v2/api-docs',
  })

  public async run(): Promise<void> {
    this.mainURL = this.urlMap.mobile // 默认移动端
    const {args, flags} = await this.parse(ApiIndex)

    if (args.api) {
      this.log(`get ${args.api} from ${this.mainURL}`)
    } else if (flags.platform) {
      this.mainURL = this.urlMap[flags.platform]
      this.log(`get api from ${flags.platform}`)
      fetch(this.mainURL)
        .then((res) => res.json())
        .then((data) => {
          this.log(data.info.title)
          const funcStr = this.swag2Code(data)
          cp.copy(funcStr)
          this.logJson(data.paths[args.api])
        })
    }

    if (args.api && flags.force) {
      this.log(`you input --force and --file: ${args.api}`)
    }
  }

  private async swag2Code(data) {
    const { args, flags } = await this.parse(ApiIndex)
    const apiInfo = data.paths.filter((path) => path.startWith(args.api))
    const funcs = Object.entries(apiInfo).map(([method, api]: [string, any]) => {
      // 把api转成驼峰函数名
      const funcItem = {
        code: '',
        doc: '',
        name: `${method}${this.apiToCamelCase(api)}`
      }
      funcItem.name = api.summary
      funcItem.doc  = `
        /**
         * ${api.summary}
         * @param {object} params 参数对象
         * @param {object} params.id 商户ID
         * @param {object} params.status 商户状态 1-启用 2禁用（默认启用）
         * @returns {object}
         */
        `
      funcItem.code = `
        ${funcItem.doc}
        export const ${funcItem.name} = () => {
          return request({
            url: \`/park/customer/park/select/$\{projectNo}\`,
            method: 'GET'
          })
        }
      `
      const paramList = api.parameters.filter(item => item.required) // 必填
      if (paramList) {
        funcItem.doc += `
         * @param {object} params 参数对象`
        for (let i = 0; i < paramList.length; i++) {
          if (i === paramList.length - 1) { // 结尾
            funcItem.doc += `
              * @returns {object}
              */
            `
          } else {
            const param = paramList[i]
            funcItem.code += `
           * @param {object} params.${param.name}`
          }
        }
      }

      return funcItem
    })
    return funcs
  }
}
