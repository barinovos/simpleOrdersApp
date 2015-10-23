(function (angular){
    'use strict';

    angular.module('bgApp')
        .factory('restService', ['$http',
            function ($http){
                return {
                    getOrdersByCompany: getOrdersByCompany,
                    getOrdersByAddress: getOrdersByAddress,
                    deleteOrderById: deleteOrderById,
                    listOrders: listOrders
                };

                function getOrdersByCompany(params){
                    return _sendGetRequest('orders-by-company', params);
                }

                function getOrdersByAddress(params){
                    return _sendGetRequest('orders-by-address', params);
                }

                function deleteOrderById(id){
                    return $http.delete('/api/delete-order?id=' + id);
                }

                function listOrders(){
                    return _sendGetRequest('list-orders');
                }

                function _sendGetRequest(endpoint, params){
                    return $http.get(getApiQueryString(endpoint, params)).then(function (res){
                        return res.data;
                    })
                }

                function _sendPostRequest(endpoint, data){
                    return $http.post('/api/' + endpoint, data).then(function (res){
                        return res.data;
                    })
                }

                function getApiQueryString(endpoint, params){
                    var query = '/api/' + endpoint;
                    if (_.isPlainObject(params) && !_.isEmpty(params)) {
                        query += '?';
                        for (var key in params) {
                            query += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&';
                        }
                    }
                    return query;
                }
            }]);

})(angular);