const paths = require('./common-paths')
const ExamplePlugin = require('../ExamplePlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: './src/index.js',
  output: {
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
    new CopyWebpackPlugin(['index.html']),
    new webpack.ProgressPlugin()
  ]
}

module.exports = config