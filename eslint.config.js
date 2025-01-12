import { configs } from '@slavamak/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['assets'] },
  configs.ignore,
  { ...configs.browser, files: [...(configs.browser.files || []), '**/*.svelte'] },
  { ...configs.base, files: [...(configs.base.files || []), '**/*.svelte'] },
  configs.typescript,
  configs.svelte,
]
