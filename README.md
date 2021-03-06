# AngularJS, Gulp, Webpack

[![Build Status](https://travis-ci.org/lenin-anzen/angularjs-gulp-webpack.svg?branch=master)](https://travis-ci.org/lenin-anzen/angularjs-gulp-webpack)
[![Coverage Status](https://coveralls.io/repos/github/lenin-anzen/angularjs-gulp-webpack/badge.svg?branch=master)](https://coveralls.io/github/lenin-anzen/angularjs-gulp-webpack?branch=master)
[![codecov.io](https://codecov.io/github/lenin-anzen/angularjs-gulp-webpack/coverage.svg?branch=master)](https://codecov.io/github/lenin-anzen/angularjs-gulp-webpack?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/lenin-anzen/angularjs-gulp-webpack/badge.svg)](https://snyk.io/test/github/lenin-anzen/angularjs-gulp-webpack)

AngularJS 1, Gulp 3, Webpack 2, Karma, ESlint, etc.

Desarrollo con Webpack-Dev-Server y Browsersync:
```shell
npm run dev
```

Generar bundle:
```shell
gulp build
```

### Paquetes instalados:
Dependencias de AngularJS:
 - [AngularJS](https://angularjs.org/)
 - [UI-Router for AngularJS (1.x)](https://ui-router.github.io/ng1/)
 - [angular-material](https://www.npmjs.com/package/angular-material)
 - [angular-aria](https://www.npmjs.com/package/angular-aria)

Dependencias de desarrollo:
 - [Browsersync](https://www.browsersync.io/)

Dependencias de Webpack:
 - [webpack Dev Server](https://github.com/webpack/webpack-dev-server)
 - [BrowserSync plugin for Webpack](https://github.com/Va1/browser-sync-webpack-plugin)
 - [HTML Loader](https://github.com/webpack-contrib/html-loader)

Dependencias de Gulp:
 - [gulp-open](https://github.com/stevelacy/gulp-open)
 - [webpack2-stream-watch](https://www.npmjs.com/package/webpack2-stream-watch)

 Pruebas Unitarias:
  - [Jest](https://facebook.github.io/jest/)

### Instalación

Instalar dependencias globalmente:
```shell
npm i -g gulp webpack
```

Dependencias de Gulp:
```shell
npm i --save-dev os rimraf gulp gulp-eslint gulp-open webpack2-stream-watch
```

Dependencias de Webpack:
```shell
npm i --save-dev webpack webpack-dev-server browser-sync-webpack-plugin html-webpack-plugin extract-text-webpack-plugin html-loader ngtemplate-loader raw-loader style-loader css-loader sass-loader node-sass
```

Dependencias de Babel:
```shell
npm i --save-dev babel-core babel-preset-es2015 babel-loader
```

Dependencias de BrowserSync:
```shell
npm i --save-dev browser-sync
```

Dependencias de Angular:
```shell
npm i --save angular angular-animate angular-messages angular-sanitize angular-aria @uirouter/angularjs angular-material ngstorage
```

Pruebas unitarias:
```shell
npm i --save-dev jest
```

Extras:
```shell
npm i --save-dev os
```
```shell
npm i --save lodash
```

Referencias:
 - [angular-es5-webpack-browsersync](https://github.com/dotmaike/angular-es5-webpack-browsersync)
 - [angularjs-webpack](https://github.com/preboot/angularjs-webpack)
 - [angular-webpack-seed](https://github.com/lenin-anzen/angularjs-gulp-webpack)
 - [Cross Platform Builds with Angular, Gulp and Webpack](https://offering.solutions/blog/articles/2016/06/17/cross-platform-builds-with-angular-2-gulp-and-webpack/)
 - [Getting set up with Browsersync and Webpack](https://gist.github.com/robinrendle/0bb0b9e55fafa1cc0c64ff4b5776df05)
[]()
[]()
[]()
