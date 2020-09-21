module.exports = {
  type: 'react-component',
  npm: {
    cjs: false,
    esModules: false,
    umd: false,
  },
  webpack: {
    config: (config) => {
      config.entry = {
        demo: ['./demo/src/index.tsx'],
      };
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
      config.module.rules.push({ test: /\.(tsx|ts)$/, loader: 'ts-loader' });
      return config;
    },
  },
};
