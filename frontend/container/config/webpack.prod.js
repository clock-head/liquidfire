const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const productionDomain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  // prod config causes webpack to run slightly differently.
  // prod config minifies code for a production ready build
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: `products@${productionDomain}/products/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
