(function() {
    
    var OrdersController = function ($scope,$log, $routeParams,customersService) {
        var customerId = $routeParams.customerId;
        $scope.customer = {};
        
        function init() {
            //Search the customers for the customerId
            customersService.getCustomer(customerId)
            .success(function(customer){
                $scope.customer = customer;
            })
            .error(function(data,status,headers,config){
                $log.log(`${data.error} status: ${status}`);
            });
        }
        
        
        init();
    };
    
    OrdersController.$inject = ['$scope','$log', '$routeParams','customersService'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());