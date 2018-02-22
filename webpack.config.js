const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')

const addons = addonsArg => {

  // if arg is String - convert ot array and remove undefined values
  const addons = []
    .concat.call([], addonsArg)
    .filter(Boolean)

  return addons.map(addonName => require(`./build-utils/addons/webpack.${addonName}.js`))
}

module.exports = (env) => {

  console.log('env:', env)

  const envConfig = require(`./build-utils/webpack.${env.env}.js`)

  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons))

  console.log(mergedConfig)

  return mergedConfig
}
