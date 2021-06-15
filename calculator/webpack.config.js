const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: './js/main.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
};
