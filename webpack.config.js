const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {

  return {
    mode: env.production ? 'production' : 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'script.js'
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                  implementation: require('sass'),
              }
            }
          ],
        },
        {
          test: /\.svg/,
          use: {
              loader: 'svg-url-loader'
          }
        },
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css',
          ignoreOrder: false,
        }),
    ],
    watch: !env.production,
    devServer: {
        contentBase: path.join(__dirname, 'build/'),
        compress: true,
        port: 9000
    }
  }
};