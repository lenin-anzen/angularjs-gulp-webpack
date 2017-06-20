'use strict';

const os                  = require('os'),
    path                  = require('path'),
    gulp                  = require('gulp'),
    eslint                = require('gulp-eslint'),
    open                  = require('gulp-open'),
    webpack               = require('webpack2-stream-watch'),
    WebpackDevServer      = require("webpack-dev-server"),
    webpackConfig         = require("./webpack.config.js"),
    rimraf                = require('rimraf'),
    browserSync           = require('browser-sync').create(),
    reload                = browserSync.reload;

///////////////////
// Configuration //
///////////////////
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
///////////
// Tasks //
///////////
/**
 * webpack2-stream-watch
 * Run webpack as a stream to conveniently integrate with gulp.
 */
gulp.task('bundle', function() {
  var config = webpackConfig('prod');
  var entryFile = config.context + '/' + config.entry.app;
  var output = config.output.path;
  return gulp.src(entryFile)
    .pipe(webpack(config))
    .pipe(gulp.dest(output));
});
/**
 * webpack-dev-server
 * Start a Webpack Dev Server
 */
gulp.task('webpack-dev-server', function() {
  var config = webpackConfig('dev');
  var entryFile = config.context + '/' + config.entry.app;
  var openOptions = {
    uri: 'http://localhost:'+config.devServer.port,
    app: browser
  };
  gulp.src(entryFile)
    .pipe(open(openOptions));
  new WebpackDevServer(webpack(config), {
        // server and middleware options
        stats: "verbose"
    }).listen(config.devServer.port, config.devServer.host, function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://"+config.devServer.host+":" + config.devServer.port);
    });
});
/**
 * BrowserSync
 * Reloads the browsers after the other tasks have finished.
 */
gulp.task('index-watch', ['index'], browserSync.reload);

/**
 * Development
 * Starts a development environment that reloads on code changes.
 */
gulp.task('dev', function () {
  
});

/** Default task: development. */
gulp.task('default', ['dev']);
