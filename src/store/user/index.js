import { reqGetCode, reqRegister, reqLogin, reqGetInfo, reqLogout } from "@/api";
import { getToken, setToken, clearToken } from "@/utils/token";
const state = {
    code: '',
    token: getToken(),
    userInfo: {},
    payId: ''
};
const mutations = {
    GETCODE(state, data) {
        state.code = data
    },
    REQLOGIN(state, token) {
        state.token = token;
    },
    GETINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        clearToken();
    },
    GETPAYID(state, payId) {
        state.payId = payId;
    }
};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        // console.log(result);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    async Register({ commit }, { phone, password, code }) {
        let result = await reqRegister({ phone, password, code });
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async Login({ commit }, { phone, password }) {
        let result = await reqLogin({ phone, password });
        // console.log(result);
        if (result.code == 200) {
            commit("REQLOGIN", result.data.token)
            setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async getInfo({ commit }) {
        let result = await reqGetInfo();
        // console.log(result);
        if (result.code == 200) {
            commit("GETINFO", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async Logout({ commit }) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEAR");
            return "ok";
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    async getPayId({ commit }, payId) {
        commit('GETPAYID', payId)
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}