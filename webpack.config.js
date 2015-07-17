'use strict';

module.exports = {
  entry: './js/App.js',
  output: {
    path: './js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
}