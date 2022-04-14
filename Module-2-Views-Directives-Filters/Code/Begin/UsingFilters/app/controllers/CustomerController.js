(function(){
    angular.module('customersApp').controller('CustomersController', function (){
        this.sortVar = 'name';
        this.reverse = false;
        this.customers=customers=[{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}]
        this.doSort = function(propColumn){
            this.sortVar = propColumn;
            this.reverse = !this.reverse;
        }
    })
}());
