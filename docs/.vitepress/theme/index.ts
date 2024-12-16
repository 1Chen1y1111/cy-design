import CyIcon from '@cy-design/components/icon'
import DefaultTheme from 'vitepress/theme'
import '@cy-design/theme-chalk/src/index.scss'

import './styles/vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(CyIcon) // 在 vitepress 中注册全局组件
  },
}
