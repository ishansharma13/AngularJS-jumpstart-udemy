(function() {
    
    var CustomersController = function ($scope,customersFactory) {
        $scope.sortBy = 'name';
        $scope.customers = [];
        $scope.reverse = false;

        function init(){
            $scope.customers = customersFactory.getCustomers();
        }
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        init();  
    };
    
    CustomersController.$inject = ['$scope','customersFactory'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());