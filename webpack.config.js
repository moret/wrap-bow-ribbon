var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle-[chunkhash].js'
  },
  plugins: [
    new WebpackMd5Hash(),
    new AssetsPlugin(),
    new ExtractTextPlugin('./dist/styles-[contenthash:20].css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './dist/vendor.bundle-[chunkhash].js',
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
