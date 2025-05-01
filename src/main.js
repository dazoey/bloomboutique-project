// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Pastikan path ini benar

const app = createApp(App)
app.use(router) // Daftarkan router ke aplikasi
app.mount('#app')
