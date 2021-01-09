const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { NODE_ENV = 'development' } = process.env

module.exports = {
  entry: {
    bundle: {import: './src'}
  },
  mode: NODE_ENV,
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
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
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        /* {
          from: 'public',
          to: path.resolve(__dirname, 'dist/public/')
        },
        {
          from: 'package*',
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: 'src/index.html',
          to: path.resolve(__dirname, 'dist')
        }, */
        {
          from: 'src/server/index.js',
          to: path.resolve(__dirname, 'dist/server.js')
        }
      ]
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          filename: '[name].js',
          chunks: 'all'
        }
      }	
    },
    minimize: NODE_ENV === 'production',
    minimizer: [new TerserPlugin()] //TODO: Move this to server
  }
}
