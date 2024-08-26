import globals from 'globals'
import eslint_js from '@eslint/js' // eslint官方包
import eslint_ts from 'typescript-eslint'
import eslint_vue from 'eslint-plugin-vue' // Vue.js 的官方 ESLint 插件
import * as eslint_vue_parser from 'vue-eslint-parser'
import stylistic from '@stylistic/eslint-plugin'

export default eslint_ts.config(
  {
    ignores: ['node_modules', 'dist', 'public', 'typings'], // 排除
  },
  /* js 推荐配置 */
  eslint_js.configs.recommended,
  /* ts 推荐配置 */
  ...eslint_ts.configs.recommended,
  /* vue 推荐配置 */
  ...eslint_vue.configs['flat/essential'],
  /* javascript 规则 */
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'error',
    },
  },
  /*  */
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    braceStyle: '1tbs',
    arrowParens: 'always',
  }),
  /* 配置全局变量 */
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  /* vue 规则 */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: eslint_vue_parser, // 使用vue解析器，这个可以识别vue文件
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: eslint_vue,
    },
    processor: eslint_vue.processors['.vue'],
    rules: {
      ...eslint_vue.configs.base.rules,
      ...eslint_vue.configs['vue3-essential'].rules,
      ...eslint_vue.configs['vue3-recommended'].rules,
    },
  },
)
