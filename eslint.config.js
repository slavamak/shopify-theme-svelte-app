import { configs, mergeConfigs } from '@slavamak/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['assets'] },
  configs.ignore,
  mergeConfigs(configs.base, { files: ['**/*.svelte'] }),
  mergeConfigs(configs.browser, { files: ['**/*.svelte'] }),
  configs.typescript,
  configs.svelte,
]
