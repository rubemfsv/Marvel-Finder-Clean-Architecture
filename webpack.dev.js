const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 8080,
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://gateway.marvel.com:443/v1/public'),
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html',
    }),
  ],
});
