import Icon from '@cy-design/components/icon' // 全局组件
import { createApp } from 'vue'

import App from './App.vue'
import '@cy-design/theme-chalk/src/index.scss' // 样式文件

const app = createApp(App)

const plugins = [Icon]
plugins.forEach(plugin => app.use(plugin)) // 注册全局组件

app.mount('#app')
