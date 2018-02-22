const config = {
  devtool: "eval-source-map", //https://webpack.js.org/configuration/devtool
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader", // this embeds imported css in to html header
          "css-loader" // this enables importing css (import './index.css')
        ]
      }
    ]
  }
}

module.exports = config