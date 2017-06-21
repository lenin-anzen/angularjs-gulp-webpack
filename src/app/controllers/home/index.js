class HomeController {
    constructor($scope) {
        console.log('constructor', $scope);
        $scope.a = 123456;
    }
    sayHello(){
        alert(123);
    }
}

HomeController.$inject = ['$scope'];

export default HomeController;
