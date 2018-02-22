const webpack = require('webpack')

const config = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config