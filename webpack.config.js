const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "js/main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.hbs$/,
        use: {
          loader: "handlebars-loader",
          options: {
            helperDirs: path.join(__dirname, "./src/js/helpers"),
            precompileOptions: {
              knownHelpersOnly: false
            }
          }
        }
      },
      {
        test: /\.(jpg|jpe?g|png|gif|svg)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "assets/img/[name].[ext]",
            publicPath: "../"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true },
      filename: "about.html",
      template: "./src/views/about.hbs"
    }),
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true },
      filename: "art.html",
      template: "./src/views/art.hbs"
    }),
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true },
      filename: "contact.html",
      template: "./src/views/contact.hbs"
    }),
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true },
      filename: "game-development.html",
      template: "./src/views/game-development.hbs"
    }),
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true },
      filename: "index.html",
      template: "./src/views/index.hbs"
    }),
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true },
      filename: "web-development.html",
      template: "./src/views/web-development.hbs"
    }),
    new ExtractTextPlugin("css/main.css")
  ]
};
