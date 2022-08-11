import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import Antd from 'ant-design-vue';
import './index.css'
import 'ant-design-vue/dist/antd.css';
import 'aos/dist/aos.css'


const app = createApp(App);

app.use("/scripts");
app.AOS = new AOS.init({});

app.use(Antd).mount('#app');
