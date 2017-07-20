const path = require('path'); // core nodejs package
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  //watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000,
    hot: true,
    //publicPath: '/'
  }
};
