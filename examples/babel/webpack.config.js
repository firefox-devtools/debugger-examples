const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./entry.js"),
  devtool: "source-map",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  }
};
