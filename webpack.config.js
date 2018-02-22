const path = require('path')
const ExamplePlugin = require('./ExamplePlugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => {

  console.log('env:', env)

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist')
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
      new CopyWebpackPlugin(['index.html'])
      // new webpack.optimize.UglifyJsPlugin()
    ]
  }
}
