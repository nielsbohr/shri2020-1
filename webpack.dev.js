const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dev.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      product: 'index.html',
    },
  },
};
