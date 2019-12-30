const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './prod.js',
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
};
