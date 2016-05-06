var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('./dist/styles.css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './dist/vendor.bundle.js',
      minChunks: function(module, count) {
        return module.resource && module.resource.match(/node_modules/);
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') }
    ]
  }
};
