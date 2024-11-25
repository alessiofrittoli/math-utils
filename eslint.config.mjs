import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{ files: [ '**/*.{js,mjs,cjs,ts}' ] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	// @ts-expect-error `languageOptions` property in `tseslint.configs.recommended` result incompatible with `eslint` config types.
	...tseslint.configs.recommended,
]
export default config