import Toast from '../lib/Toast.vue'
import { createApp, h } from 'vue';

export const openToast = (options) => {
    const { message, type, duration, } = options
    console.log(options);
    // 1.创建modal框，挂载到页面上
    const div = document.createElement('div')
    document.body.appendChild(div)
    // 2.使用h函数添加Modal的属性方法
    const app = createApp({
        render() {
            return h(Toast, {
                visible: true,
                // 监听Toast组件自带的update事件,获取关闭与否
                // 如果newVisible是false,就是要关闭它
                'onUpdate:visible': (newVisible) => {
                    console.log(newVisible);
                    if (newVisible === false) {
                        close()
                    }
                },
                message,
                type,
                duration,
            },)
            // 第一个对象是属性和方法 第二个对象是插槽
        }
    })

    // 3.关闭就是销毁Modal
    const close = () => {
        // 销毁app
        app.unmount()
        // 销毁挂载的div
        document.body.removeChild(div)
    }
    app.mount(div)
}