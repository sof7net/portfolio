import { createApp } from 'vue'
// import 'vite/modulepreload-polyfill'

import App from './App.vue'

import router from './router'

createApp(App)
.use(router)
.mount('#app')
