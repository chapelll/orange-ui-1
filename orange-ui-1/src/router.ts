import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [{
        path: '/',
        component: Home,
    }, {
        path: '/doc',
        component: Doc,
        children: [{
            path: '',
            component: DocDemo,
        }, {
            path: 'switch',
            component: SwitchDemo,
        }, {
            path: 'button',
            component: ButtonDemo,
        }, {
            path: 'modal',
            component: ModalDemo,
        }, {
            path: 'tabs',
            component: TabsDemo,
        },]
    },]
})
