import {createApp} from 'vue'
import App from './App.vue'
import Router from './router/index'


//引入 组件 全局
import Dui from 'd-ui'
// 全局引入样式
import 'theme-chalk/src/index.scss'

import './style/index.css'

createApp(App).use(Dui)
.use(Router).mount("#app")