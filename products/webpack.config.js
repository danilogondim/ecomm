const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap' // bootstrap is the one exporting the function. Index just call and run bootstrap
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};