import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import unused from 'eslint-plugin-unused-imports'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'unused-imports': unused
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'unused-imports/no-unused-imports': 'error',
    }
  }
]
