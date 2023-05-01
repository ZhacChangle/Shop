const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    // 部署到 github 上面时 要设置为 ‘./’ 默认为 ‘/’
    // 为 / 时会部署到 https://zhacchangle.github.io/ 上
    // 为 ./ 时会部署到 https://zhacchangle.github.io/zheye
    // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
    // ./ 不适用的场景：1.当使用基于 HTML5 history.pushState 的路由时；当使用 pages 选项构建多页面应用时。（来自官方文档）
    // 特判的话可以设置为： ‘/zheye/’ zheye为具体的子路径
    // 参考:https://cli.vuejs.org/zh/config/#publicpath
    publicPath: '/Shop/',
    lintOnSave: false,
    transpileDependencies: true,
    // 代理跨域
    devServer: {
        proxy: {
            "/api": {
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                target: "http://gmall-h5-api.atguigu.cn",
                // pathRewrite: { "^/api": "" }
            }
        }
    },
})
