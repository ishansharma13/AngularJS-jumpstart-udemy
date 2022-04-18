(function() {
    
    var CustomersController = function ($scope,$log,customersService,appSettings) {
        $scope.sortBy = 'name';
        $scope.customers = [];
        $scope.reverse = false;
        $scope.appSettings = appSettings;
        function init(){
            customersService.getCustomers()
            .success(function(customers){
                $scope.customers = customers;
            })
            .error(function(data,status,headers,config){
                $log.log(`${data.error} status: ${status}`);
            });
        }
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        init();  
    };
    
    CustomersController.$inject = ['$scope','$log','customersService','appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());