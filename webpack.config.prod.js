var path = require('path');
var webpack = require('webpack');
var dist = path.join(__dirname, 'app/dist');
var src = path.join(__dirname, 'src');
module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: dist,
    filename: 'app.min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: src}
    ]
  }
};
