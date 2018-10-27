module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-scroll-section',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    html: {
      template: 'demo/src/index.html',
    },
  },
};
