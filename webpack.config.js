var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('./dist/styles.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
    ]
  }
};
