const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "country-currency-map": "./src/index.js",
    "country-currency-map.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
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
