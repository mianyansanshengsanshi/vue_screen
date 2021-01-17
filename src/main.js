import { createApp } from 'vue'
import App from '@/App.vue';
import {axios, API} from "@/rest_api";

// 导入element ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.use(ElementPlus);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$rest_api = API; // 将API接口包注册到Vue全局

// app.config.productionTip = false;
app.mount('#app');
