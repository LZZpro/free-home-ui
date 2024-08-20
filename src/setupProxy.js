//react 脚手架内置的库 
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/hwwtml',
        createProxyMiddleware({//预见/api1前缀的就会触发该代理配置
            target:"https://www.w3schools.com",//请求转发给谁
            changeOrigin:true,//控制服务器收到的请求头中host字段的值  来自 5001端口了
            pathRewrite:{'^/hwwtml':'/html'} //重写请求路径 只要带有/api1开头的路径才会走这个代理
        })
    )
}
