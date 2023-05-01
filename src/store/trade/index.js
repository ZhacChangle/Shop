import { reqUserAddressInfo, reqUserOrderInfo } from "@/api";
const state = {
    tradeAddress: [],
    tradeInfo: []
};
const mutations = {
    USERADDRESSINFO(state, tradeAddress) {
        state.tradeAddress = tradeAddress;
    },
    USERORDERINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
};
const actions = {
    async UserAddressInfo({ commit }) {
        let result = await reqUserAddressInfo();
        if (result.code == 200) {
            commit('USERADDRESSINFO', result.data)
        }
    },
    async UserOrderInfo({ commit }) {
        let result = await reqUserOrderInfo();
        if (result.code == 200) {
            commit("USERORDERINFO", result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}