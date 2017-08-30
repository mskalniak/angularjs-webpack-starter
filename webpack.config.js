module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'dist/dist.js'
  },
  module: {
    rules: [
      { test: /\.html$/, loaders: ['html-loader'] },
      { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  watch: true
};