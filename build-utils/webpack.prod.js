const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        // extract css into style.css (see plugins config below)
        use: ExtractTextWebpackPlugin.extract({
          use: 'css-loader', // this enables importing css (import './index.css')
          fallback: 'style-loader' // for lazy loaded bundles - fall back to embedding css into html 
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config