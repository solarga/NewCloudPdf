module.exports = {
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    hotOnly: true, // 热更新
    proxy: {

      '/api': { // 测试环境服务器
        target: 'http://api.sagaorg.com:8070/',
        changeOrigin: true,
        ws: false
      }
    } // 设置代理
  }
}