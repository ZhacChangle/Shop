// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router"
import routes from "./routes"
// 使用插件
Vue.use(VueRouter);

import store from "@/store"

// 先把 VueRouter 原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

// 重写replace
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}



let router = new VueRouter({
    base: '/Shop/',
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
    },
})

router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (!name) {
                try {
                    await store.dispatch('getInfo')
                    next()
                } catch (error) {
                    await store.dispatch('Logout');
                    next('/login')
                }
            } else {
                next()
            }
        }
    } else {
        let toPath = to.path;
        if (toPath == '/pay' || toPath == '/paysuccess' || toPath == '/trade' || toPath.indexOf('/center') != -1) {
            next("/login?redirect=" + toPath)
        } else {
            next();
        }
    }
})

export default router