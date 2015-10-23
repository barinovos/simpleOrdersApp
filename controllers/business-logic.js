'use strict';

var storage = require("./storage");
var _ = require("lodash");

function getOrderItemsByCompanyName(name){
    var data = storage.getData(),
        currentItems = [];
    data.forEach(function(order){
        if (order.companyName === name) {
            currentItems.push(order);
        }
    });
    return currentItems;
}

function getOrderItemsByCustomerAddress(address){
    var data = storage.getData(),
        currentItems = [];
    data.forEach(function(order){
        if (order.customerAddress === address) {
            currentItems.push(order);
        }
    });
    return currentItems;
}

function deleteOrderById(id){
    return storage.deleteOrder(id);
}

function sortOrdersByDescending(){
    var data = storage.getData(),
        items = [];
    _.forEach(_.countBy(data, 'orderedItem'), function(n, key){
        items.push({name: key, count: n});
    });
    return _.sortByOrder(items, ['count'], ['desc']);
}

module.exports.getOrderItemsByCompanyName = getOrderItemsByCompanyName;
module.exports.getOrderItemsByCustomerAddress = getOrderItemsByCustomerAddress;
module.exports.deleteOrderById = deleteOrderById;
module.exports.sortOrdersByDescending = sortOrdersByDescending;