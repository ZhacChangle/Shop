import requests from "./request";

import mockRequests from "./mockRequest";

// 三级联动接口 /api/product/getBaseCategoryList

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

export const reqGetBannerList = () => mockRequests.get('/banner');

export const reqGetFloorList = () => mockRequests.get('/floor');

export const reqGetSearchInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})

export const reqGetDetailInfo = (skuId) => requests({ url: `/item/${ skuId }`, method: 'get' })
export const reqAddOrUpdateShopCar = (skuId, skuNum) => requests({ url: `/cart/addToCart/${ skuId }/${ skuNum }`, method: 'post' })
export const reqCarList = () => requests({ url: "/cart/cartList", method: "get" })
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "DELETE" })
export const reqCheckCartById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" })
    // /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" })
export const reqRegister = (data) => requests({ url: `/user/passport/register`, data, method: "post" })
export const reqLogin = (data) => requests({ url: `/user/passport/login`, data, method: 'post' })
export const reqGetInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: "get" })
export const reqLogout = () => requests({ url: "/user/passport/logout", method: "get" })
export const reqUserAddressInfo = () => requests({ url: "/user/userAddress/auth/findUserAddressList", method: "get" })
export const reqUserOrderInfo = () => requests({ url: "/order/auth/trade", method: "get" })
export const reqOrderPay = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post" })
export const reqOrderPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" })
export const reqOrderPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" })
export const reqOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: "get" })