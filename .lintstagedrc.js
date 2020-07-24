module.exports = {
  '*.{js,vue}': ['vue-cli-service lint'],
  '*.{md,html,json}': ['prettier --write'],
  '*.{css,scss}': ['prettier --write']
};
