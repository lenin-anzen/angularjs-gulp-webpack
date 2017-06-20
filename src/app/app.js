'use strict';

// Dependencies
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import 'ngstorage';

// Custom
import controllersModule from './controllers';
import services from './services';
import config from './config';

const app = angular
    .module('app', [uiRouter, ngAnimate, ngMessages, ngSanitize, 'ngStorage', controllersModule.name, services])
    .config(config);

export default app;
