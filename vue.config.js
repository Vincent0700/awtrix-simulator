const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '.',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@scss', resolve('src/scss'));
  },
  devServer: {
    port: 5392,
    open: process.platform === 'darwin'
  }
};
