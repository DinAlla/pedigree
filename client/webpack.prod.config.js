const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    pedigree: './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].0.0.1.js',
    publicPath: '/prod'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].0.0.1.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
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
              MiniCssExtractPlugin.loader,
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