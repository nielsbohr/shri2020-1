const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass');
const path = require('path');

module.exports = {
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      ignoreOrder: false,
    }),
  ],
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'index.html',
      product: 'index.html',
    },
  },
};
