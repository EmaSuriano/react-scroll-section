module.exports = {
  extends: ['airbnb', 'eslint-config-prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
};
