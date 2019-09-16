const path = require('path');
const NodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

const serverConfig = {
  entry: {
    server: path.join(__dirname, 'src', 'server', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  externals: [
    NodeExternals(),
  ],
};

module.exports = webpackMerge(commonConfig, serverConfig);