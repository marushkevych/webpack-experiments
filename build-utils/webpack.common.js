const paths = require('./common-paths')
const ExamplePlugin = require('../ExamplePlugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    filename: '[chunkhash].bundle.js',
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
        test: /\.png$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[hash].[ext]'
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