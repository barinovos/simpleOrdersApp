(function (angular){
    'use strict';

    angular.module('bgApp')
        .controller('appController', ['$scope', '$timeout', 'restService', '$mdDialog',
            function ($scope, $timeout, restService, $mdDialog){
                var vm = this;

                vm.companyName = '';
                vm.customerAddress = '';
                vm.orderId = '';
                vm.ordersWasSearched_name = false;
                vm.ordersWasSearched_address = false;


                vm.getOrdersByCompany = function(){
                    if (vm.companyName){
                        vm.ordersWasSearched_name = true;
                        restService.getOrdersByCompany({name: vm.companyName}).then(function(data){
                            vm.ordersByCompany = data;
                        });
                    }
                };

                vm.getOrdersByAddress = function(){
                    if (vm.customerAddress){
                        vm.ordersWasSearched_address = true;
                        restService.getOrdersByAddress({address: vm.customerAddress}).then(function(data){
                            vm.ordersByAddress = data;
                        });
                    }
                };

                vm.showDeleteConfirm = function(ev) {
                    if (vm.orderId) {
                        var confirm = $mdDialog.confirm()
                            .title('Confirmation of remove')
                            .content('Are you sure you want to delete order #' + vm.orderId + "?")
                            .targetEvent(ev)
                            .ok('Delete')
                            .cancel('Cancel');
                        $mdDialog.show(confirm).then(deleteOrder);
                    }
                };

                vm.getPopularOrders = function(){
                    restService.listOrders().then(function(data){
                        vm.sortedOrders = data;
                    })
                };

                function deleteOrder(){
                    restService.deleteOrderById(vm.orderId).then(function(res){
                        if (res.data) {
                            vm.itemDeleted = true;
                            $timeout(function(){
                                vm.itemDeleted = false;
                            }, 1500);
                        }
                    });
                }
            }]);

})(angular);