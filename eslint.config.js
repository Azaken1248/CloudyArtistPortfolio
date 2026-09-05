import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Fast Refresh ergonomics rather than correctness. Pairing a provider with
      // its hook, or a component with its motion variants, is idiomatic React;
      // allowConstantExport covers the variants, and the remaining cases are
      // reported as warnings so they stay visible without failing the build.
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    // Test setup and specs are not shipped and are not Fast Refresh boundaries.
    files: ['**/*.test.{ts,tsx}', 'src/test/**'],
    rules: {
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])
