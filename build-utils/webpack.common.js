const paths = require('./common-paths')
const ExamplePlugin = require('../ExamplePlugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    // use [chunkhash] to prefix bundle with unique hash. 
    // html-webpack-plugin will use the proper name
    // filename: '[chunkhash].bundle.js',
    filename: 'bundle.js',
    path: paths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000, // url-loader falls back to file-loader if size exceeds 10Kb
            name: './images/[hash].[ext]' // this is conf for file-loader plugin
          }
        }
      }
    ]
  },
  plugins: [
    new ExamplePlugin(),
    new HtmlWebpackPlugin(),
    new webpack.ProgressPlugin()
  ]
}

module.exports = config