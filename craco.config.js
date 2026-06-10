// craco.config.js
const path = require("path");

const paths = require('react-scripts/config/paths');
paths.appBuild = path.resolve(__dirname, 'dist');

let webpackConfig = {
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };

      return webpackConfig;
    },
  },
};

module.exports = webpackConfig;
