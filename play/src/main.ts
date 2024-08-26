import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@cy-design/components/icon'
import '@cy-design/theme-chalk/src/index.scss'

const plugins = [Icon]

const app = createApp(App)
plugins.forEach((plugin) => app.use(plugin)) // 注册全局组件

app.mount('#app')
