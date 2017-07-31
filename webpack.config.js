module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'dist/dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ['html-loader']

      }
    ]
  },
  watch: true
};