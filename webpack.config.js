const path = require('path');
const source = path.join(__dirname, '/client/src');
const output = path.join(__dirname, '/client/dist');


module.exports = {
  mode: 'development',
  entry: `${source}/index.jsx`,
  output: {
    path: path.resolve(output),
    filename: 'bundle.js'
  },
  resolve: {extensions: ['.js', '.jsx']},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(source),
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
}