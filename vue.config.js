module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://carredo.herokuapp.com/",
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
