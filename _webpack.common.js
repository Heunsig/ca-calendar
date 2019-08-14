const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv').config()

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: process.env.NODE_ENV === 'production' ? 'ca-calendar.js' : '[name].bundle.js',
    path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'dev'),
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}