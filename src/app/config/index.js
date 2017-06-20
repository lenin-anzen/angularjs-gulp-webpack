'use strict';

import template from '../controllers/home/view.html';

let configuration = function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/',
        //template: '<p>Home {{a}}</p>',
        template: require('../controllers/home/view.html'),
        controller: 'HomeController',
        controllerAs: 'vm'
    }
    $stateProvider.state(homeState);

    var fooState = {
        name: 'foo',
        url: '/foo',
        template: template,
        controller: 'HomeController',
        controllerAs: 'vm'
    }
    $stateProvider.state(fooState);

    var aboutState = {
        name: 'about',
        url: '/about',
        template: template,
        controller: 'HomeController',
        controllerAs: 'vm'
    }
    console.log('aboutState:', aboutState);
    $stateProvider.state(aboutState);
};

configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default configuration;
