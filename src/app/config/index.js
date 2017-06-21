import homeTemplate from '../controllers/home/view.html';

let configuration = function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/',
        //template: '<p>Home {{a}}</p>',
        template: homeTemplate,
        controller: 'HomeController',
        controllerAs: 'vm'
    }
    $stateProvider.state(homeState);

    var fooState = {
        name: 'foo',
        url: '/foo',
        template: homeTemplate,
        controller: 'HomeController',
        controllerAs: 'vm'
    }
    $stateProvider.state(fooState);
};

configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default configuration;
