const path = require('path');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

const clientConfig = {
  entry: {
    client: path.join(__dirname, 'src', 'server', 'client.js'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
};

module.exports = webpackMerge(commonConfig, clientConfig);