import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './lib/orange.scss'
import './index.scss'
import 'github-markdown-css'
import App from './App.vue'
import '../public/svg.js'

import { router } from './router.ts'

const app = createApp(App)
app.use(router)
app.mount('#app')
