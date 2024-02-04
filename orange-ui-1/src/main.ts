import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

import zcz from './components/zcz.vue'
import zcz2 from './components/zcz2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [{
        path: '/',
        component: zcz,
    },{
        path: '/zcz2',
        component: zcz2,
    },]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
