module.exports = {
  type: 'react-component',
  npm: {
    cjs: false,
    esModules: false,
    umd: false,
  },
  webpack: {
    config: (config) => {
      if (config.mode === 'development') {
        config.entry = './demo/src/index';
      } else {
        config.entry = './src/index';
      }
      return config;
    },
    extra: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{ test: /\.(tsx|ts)$/, loader: 'ts-loader' }],
      },
    },
  },
};
