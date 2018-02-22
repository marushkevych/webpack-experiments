const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

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
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true // dont remove sourceMap footer from the bundle
    }),
    // this will generate bundle.js.gz. The server needs to be configured
    // to serve bundle.js.gz instead of bundle.js (if browser supports it)
    // see https://stackoverflow.com/a/34828216/852675
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 0,
      minRatio: 0.8
    })
  ]
}

module.exports = config