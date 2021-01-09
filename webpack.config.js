const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { NODE_ENV = 'development' } = process.env
const serverWebpackConfig = require('./webpack.server.config.js')

module.exports = {
  mode: NODE_ENV,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'build'
  },
  entry: './src',
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      images: path.resolve(__dirname, 'public', 'images')
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }	
    },
    minimize: NODE_ENV === 'production',
    minimizer: [new TerserPlugin()] //TODO: Move this to server
  }
}
