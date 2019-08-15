const path = require('path')
const pjson = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.ENV === 'production' ? true : false
const webpack = require('webpack')

module.exports = {
  mode: process.env.ENV,
  entry: isProduction ? './src/index.js' : {
    bundle: './src/index.js',
    sample: './src/test.js'
  },
  devtool: isProduction ? false : 'inline-source-map',
  devServer:{
    contentBase: './dev',
  },
  optimization: {
    minimizer: isProduction ? [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})] : []
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${pjson.name}-${pjson.version}.min.css`
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'MONTHNAMES': JSON.stringify([ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]),
      'DAYNAMES': JSON.stringify([ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday' ]),
      'DAYNAMES_SIMPLFIED': JSON.stringify([ 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri',  'Sat' ])
    })
  ],
  output: {
    filename: isProduction ? `${pjson.name}-${pjson.version}.min.js` : '[name].js',
    path: path.resolve(__dirname, isProduction ? 'dist' : 'dev')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test:/\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000
            }
          }
        ]
      }
    ]
  }
}