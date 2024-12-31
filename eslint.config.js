import { configs } from '@slavamak/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['assets'] },
  configs.ignore,
  configs.base,
  configs.browser,
  configs.typescript,
]
