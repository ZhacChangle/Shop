import { reqGetDetailInfo, reqAddOrUpdateShopCar } from "@/api";
import { getUUID } from "@/utils/uuid_token"
const state = {
    detailInfo: {},
    uuid_token: getUUID()
};
const mutations = {
    GETDETAILINFO(state, detailInfo) {
        state.detailInfo = detailInfo
    }
};
const actions = {
    async getDetailInfo({ commit }, skuId) {
        let result = await reqGetDetailInfo(skuId);
        if (result.code == 200) {
            commit('GETDETAILINFO', result.data)
        }
    },
    async AddOrUpdateShopCar({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCar(skuId, skuNum);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    }

};
const getters = {


    categoryView(state) {
        return state.detailInfo.categoryView || {};
    },

    skuInfo(state) {
        return state.detailInfo.skuInfo || {};
    },
    skuImageList(state) {
        if (state.detailInfo.skuInfo)
            return state.detailInfo.skuInfo.skuImageList;
        else return [];
    },
    spuSaleAttrList(state) {
        return state.detailInfo.spuSaleAttrList || [];
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}