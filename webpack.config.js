const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
            // process.env.NODE_ENV !== 'production'
            //   ? 'style-loader'
            //   : MiniCssExtractPlugin.loader,
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.svg/,
          use: {
              loader: 'svg-url-loader'
          }
        },
        {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        }
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
        port: 9000
    }
  };