const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  stats: {
    warnings: false
  },
  entry: './src/client/js/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      cache: false
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}