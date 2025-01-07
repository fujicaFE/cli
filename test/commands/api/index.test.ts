import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('api:index', () => {
  it('runs api:index cmd', async () => {
    const {stdout} = await runCommand('api:index')
    expect(stdout).to.contain('hello world')
  })

  it('runs api:index --name oclif', async () => {
    const {stdout} = await runCommand('api:index --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
