const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    publicPath: 'http://localhost:3000/',
    progress: true
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, './src'),
            ],
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            include: [
              path.resolve(__dirname, './src'),
            ],
          },
          {
            test: /\.css$/,
            include: [
              path.resolve(__dirname, './src/assets'),
              path.resolve(__dirname, './node_modules'),
            ],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.(jp?g|png|gif|bmp)$/,
            use: [
              {
                loader: 'url-loader'
              },
            ],
          },
        ],
      },
    ],
  },
};