import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DropdownDemo from './components/DropdownDemo.vue'
import ToastDemo from './components/ToastDemo.vue'
import FormDemo from './components/FormDemo.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'


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
            redirect: '/doc/intro'
        },
        {
            path: 'intro',
            component: Intro,
        },
        {
            path: 'install',
            component: Install,
        },
        {
            path: 'get-started',
            component: GetStarted,
        },
        {
            path: 'switch',
            component: SwitchDemo,
        },
        {
            path: 'button',
            component: ButtonDemo,
        },
        {
            path: 'modal',
            component: ModalDemo,
        },
        {
            path: 'tabs',
            component: TabsDemo,
        }, {
            path: 'dropdown',
            component: DropdownDemo,
        }, {
            path: 'toast',
            component: ToastDemo,
        },{
            path: 'form',
            component: FormDemo,
        },]
    },
    ]
})
