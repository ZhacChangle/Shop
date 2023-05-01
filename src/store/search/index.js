// search模块的小仓库
import { reqGetSearchInfo } from "@/api"
import { watch } from "less";
const state = {
    SearchList: {},
};
const mutations = {
    GETSEARCHLIST(state, SearchList) {
        // this.state 是大仓库的state
        // this.state.SearchList = SearchList;
        state.SearchList = SearchList;

    }
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
};
const getters = {
    goodsList(state) {
        return state.SearchList.goodsList || []
    },
    trademarkList(state) {
        return state.SearchList.trademarkList || []
    },
    attrsList(state) {
        return state.SearchList.attrsList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}