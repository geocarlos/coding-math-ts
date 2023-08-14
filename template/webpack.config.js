const path = require('path');

module.exports = {
  entry: './main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};