const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "country-currency-map": "./index.js",
    "country-currency-map.min": "./index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: ["/node_modules/", "/tests/"]
      }
    ]
  }
};
