import '@/assets/css/index.css'
import 'uno.css'
import 'amfe-flexible'
import { typing } from "@/directives/typing";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.directive("typing", typing);
app.mount('#app')
