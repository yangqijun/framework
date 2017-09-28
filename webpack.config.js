const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./client/src/js/app.js",
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Book Lib'
    // })
  ],
  output: {
    filename: 'framework.[chunkhash].full.js',
    path: path.resolve(__dirname, "client/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      // { test: /\.html$/, loader: 'html-loader'},
      { test: /\.html$/, loader: "handlebars-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
    ]
  }
};