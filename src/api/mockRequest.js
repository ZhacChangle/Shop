// 对axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";

// 引入进度条样式
import "nprogress/nprogress.css";

const requests = axios.create({
    //配置对象
    // 基础路径
    baseURL: "/mock",
    // 代表请求超时的时间
    timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个属性很重要 header请求头
    // 进度条开始动
    nprogress.start();
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done();
    return res.data;
}, (err) => {
    // return Promise.reject(new Error("faile"));
    return err.message
});

export default requests;