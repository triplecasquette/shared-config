// eslint/shared/eslint.config.js
import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import unused from 'eslint-plugin-unused-imports'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      'unused-imports': unused
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'unused-imports/no-unused-imports': 'error'
    }
  }
]
