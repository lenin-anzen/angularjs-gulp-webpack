'use strict';

const os                = require('os'),
    path                = require('path'),
    webpack             = require('webpack'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    ExtractTextPlugin   = require('extract-text-webpack-plugin'),
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
        resolve: {
            extensions: ['*', '.js', '.json']
        },
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
                    //loader: 'html-loader!ngtemplate-loader?relativeTo=' + paths.source
                    // ngtemplate-loader!html-loader!raw-loader
                },
                // SASS modularization using style and css loader
				{
					test: /\.(scss|css)$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{ loader: 'css-loader', query: { modules: false, sourceMaps: true } },
							{ loader: 'sass-loader', query: { sourceMaps: true } }
						]
					})
				},
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: './app/index.html',
                filename: 'index.html'
            }),
			new ExtractTextPlugin('[name].css?v=[contenthash]'),
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
