import Vue from "vue";
import VUex from "vuex";
// 需要使用插件一次
Vue.use(VUex);

// 引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail"
import shopcar from "./shopcar";
import user from "./user";
import trade from "./trade";
export default new VUex.Store({
    // 实现Vuex仓库模块式发开存储数据
    modules: {
        home,
        search,
        detail,
        shopcar,
        user,
        trade
    }

});