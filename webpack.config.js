const path = require('path')
const ExamplePlugin = require('./ExamplePlugin')
const webpack = require('webpack')

module.exports = (env) => {

  console.log('env:', env)

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'build')
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
      // new webpack.optimize.UglifyJsPlugin()
    ]
  }
}
