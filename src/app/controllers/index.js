import angular from 'angular';

import HomeController from "./home";

let controllersModule = angular.module('app.controllers', []);
controllersModule.controller("HomeController", HomeController);

export default controllersModule;
