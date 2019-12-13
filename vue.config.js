module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.1.70:8080',
          changeOrigin: true,
          // ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  
  