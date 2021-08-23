module.exports = {
  mode: "development",
  //   mode: "production"
  entry: './src/index.js',
  output: {
      filename: '[name].[contenthash].js'
  }
};
