import { reqCarList, reqDeleteCartById, reqCheckCartById } from "@/api";
const state = {
    carList: []
};
const mutations = {
    GETCARLIST(state, carList) {
        state.carList = carList;
    }
};
const actions = {
    async getCarList({ commit }) {
        let result = await reqCarList();
        if (result.code == 200) {
            commit('GETCARLIST', result.data)
        }

    },
    async DeleteCartById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async CheckCartById({ commit }, { skuId, isChecked }) {
        let result = await reqCheckCartById(skuId, isChecked);
        if (result.code == 200) return "ok";
        else {
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllCheckedCart({ getters, dispatch }) {
        let PromiseAll = []
        getters.cartInfoList.forEach(element => {
            let promise = element.isChecked == 1 ? dispatch('DeleteCartById', element.skuId) : '';
            PromiseAll.push(promise);
        });
        console.log(PromiseAll);
        return Promise.all(PromiseAll);
    },
    UpdateAllChecked({ getters, dispatch }, isChecked) {
        let PromiseAll = [];
        getters.cartInfoList.forEach(item => {
            let promise = dispatch('CheckCartById', { skuId: item.skuId, isChecked });
            PromiseAll.push(promise);
        })
        return Promise.all(PromiseAll);
    }
};
const getters = {
    cartInfoList(state) {
        if (state.carList.length == 0) return [];
        return state.carList[0].cartInfoList || [];
    }
};


export default {
    state,
    mutations,
    actions,
    getters
}