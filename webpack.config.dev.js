var path = require('path');
var webpack = require('webpack');
var dist = path.join(__dirname, 'app/dist');
var src = path.join(__dirname, 'src');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: ['./src/index'],
  output: {
    path: dist,
    filename: 'app.min.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: src}
    ]
  }
};
