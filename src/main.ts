import './assets/main.css'

import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
app.use(naive);


