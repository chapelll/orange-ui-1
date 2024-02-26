import { createApp } from 'vue'
import './lib/orange.scss'
import './index.scss'
import 'github-markdown-css'
import App from './App.vue'

import { router } from './router.ts'

const app = createApp(App)
app.use(router)
app.mount('#app')
