const path = require('path')
const webpack = require('webpack')
const isPROD = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: !isPROD,
      minimize: isPROD
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !isPROD,
      compress: {
        warnings: !isPROD,
        drop_console: isPROD
      },
      comments: !isPROD,
      screw_ie8: isPROD
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
