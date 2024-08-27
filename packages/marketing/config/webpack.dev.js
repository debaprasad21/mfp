// merge is function that we can use to merge two different webpack config objects.
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// devConfig gonna override anything that is common from common config
module.exports = merge(commonConfig, devConfig);
