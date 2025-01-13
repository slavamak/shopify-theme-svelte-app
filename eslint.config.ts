import { configs, mergeConfigs } from '@slavamak/eslint-config'
import type { Linter } from 'eslint'

export default [
  { ignores: ['assets'] },
  configs.ignore,
  mergeConfigs(configs.base, { files: ['**/*.svelte'] }),
  mergeConfigs(configs.browser, { files: ['**/*.svelte'] }),
  configs.typescript,
  configs.svelte,
] satisfies Linter.Config[]
