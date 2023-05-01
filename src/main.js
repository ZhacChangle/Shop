import Vue from 'vue'
import App from './App.vue'
// 三级联动组件----全局组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
import "swiper/css/swiper.css";
Vue.config.productionTip = false

import { MessageBox, Button } from "element-ui"
import VueLazyload from 'vue-lazyload'
import NPM from "@/assets/001.jpg"

Vue.use(VueLazyload, {
        loading: NPM,
    })
    // 第一个参数：全局组件的名字 第二个参数：哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
// 引入路由
import router from '@/router'
// 引入仓库
import store from './store'

import '@/mock/mockServe';
import * as API from "@/api"
import "@/plugins/validate";
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
    },
    // 注册路由
    router,
    // 注册仓库:组件实例的身上会多一个属性$store属性
    store
}).$mount('#app')