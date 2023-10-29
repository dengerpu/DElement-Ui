import {createApp} from 'vue'
import App from './App.vue'

//引入 组件 全局
import Dui from 'd-ui'
// 全局引入样式
import 'theme-chalk/src/index.scss'

createApp(App).use(Dui).mount("#app")