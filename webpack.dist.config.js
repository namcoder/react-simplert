
var webpack = require('webpack');
var path = require('path');
var npm = require("./package.json");

require('es6-promise').polyfill();

module.exports = {
  entry: {
    app: './src/simplert.js'
  },  
  output: {    
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
    filename: 'simplert.bundle.js',
    library: 'Simplert',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `React-Simplert v.${npm.version}\nIrfan Maulana (https://github.com/mazipan)`
    })
  ]

};
