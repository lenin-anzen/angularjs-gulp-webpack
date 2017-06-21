'use strict';

// Dependencies
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import 'ngstorage';

// Style dependencies
import 'angular-material/angular-material.css';

// Custom
import controllersModule from './controllers';
import servicesModule from './services';
import config from './config';
import run from './run';

const app = angular
    .module('app', [
        uiRouter, 
        ngAnimate, 
        ngMessages, 
        ngSanitize, 
        'ngStorage', 
        controllersModule.name, 
        servicesModule.name
    ])
    .config(config)
    .run(run);

export default app;
