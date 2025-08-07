const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      // '@features': path.resolve(__dirname, 'src/features'),
      // '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      // '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
