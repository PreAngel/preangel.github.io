import { fileURLToPath } from 'node:url'
import path from 'node:path'

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
	{
		ignores: [
			'dist/**',
			'docs/_site/**',
			'node_modules/**',
			'tests/fixtures/**',
		],
	},

	{
		files: ['**/*.{js,cjs,mjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.es2021,
				...globals.node,
			},
		},
	},
		js.configs.recommended,

	{
		files: ['**/*.{ts,tsx,mts,cts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.es2021,
				...globals.node,
			},
		},
	},
		...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx,mts,cts}'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
			},
		},
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-floating-promises': 'error',
		},
	},

	{
		files: ['tests/**/*.ts'],
		rules: {
			'@typescript-eslint/unbound-method': 'off',
		},
	},
]
