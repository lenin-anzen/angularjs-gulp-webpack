'use strict';

const os                = require('os'),
    path                = require('path'),
    webpack             = require('webpack'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    BrowserSyncPlugin   = require('browser-sync-webpack-plugin');

/**
 * Configuration
 */
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

const paths = {
    source: path.resolve(__dirname, '../../src'),
    bundle: path.resolve(__dirname, '../../docs'),
};

module.exports = function (env) {
	return {
        devtool: 'eval-source-map',
        context: paths.source,
        entry: [ 
			'./app/index.js',
		],
		output: {
			path: paths.bundle,
			filename: 'bundle.js',
		},
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                    // ngtemplate-loader!html-loader!raw-loader
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: './app/index.html',
                filename: 'index.html'
            }),
            /*new HtmlWebpackPlugin({
                template: './app/controllers/home/view.html',
                filename: './app/controllers/home/view.html'
            }),*/
            new BrowserSyncPlugin(
                // BrowserSync options
                {
                    // browse to http://localhost:3000/ during development
                    host: 'localhost',
                    port: 3000,
                    // proxy the Webpack Dev Server endpoint
                    // (which should be serving on http://localhost:3100/)
                    // through BrowserSync
                    proxy: 'http://localhost:3100/',
                    // Open browsers
                    browser: [browser, "firefox"]
                },
                // plugin options
                {
                    // prevent BrowserSync from reloading the page
                    // and let Webpack Dev Server take care of this
                    reload: false
                }
            )
        ],
        devServer: {
			contentBase: paths.bundle,
			compress: false,
			host: "0.0.0.0",
			port: 3100,
			// Display only errors to reduce the amount of output.
			stats: 'errors-only',
            // Behind proxy
            disableHostCheck: true
		},
		watch: true
    };
}
