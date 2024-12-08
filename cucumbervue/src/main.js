import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'
import axios from 'axios'


const app = createApp(App)                      // app 객체 생성

app.use(router, axios).mount('#app');

app.config.globalProperties.axios = axios       // axios 전역 설정