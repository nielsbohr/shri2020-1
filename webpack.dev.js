const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('sass');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dev.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
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
    new HtmlWebpackPlugin({
      title: 'Dev',
      template: 'build/index.html',
    }),
  ],
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
