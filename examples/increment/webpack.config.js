const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./example.js"),
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
            presets: ["es2015"],
            plugins: [
              [
                "transform-es2015-modules-commonjs",
                {
                  noInterop: false
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
