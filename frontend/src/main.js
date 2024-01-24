import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

createApp(App)
  .use(router) // 先使用.use(router)来安装router插件
  .mount('#app'); // 然后使用.mount('#app')来挂载Vue应用
