
var csv = require('csv-parser');
var fs = require("fs");
var q = require("q");
var _ = require("lodash");

var temporaryStorage = {};

function readData(){
    var deferred = q.defer(),
        orders = [];
    fs.createReadStream("./data/sample.csv")
        .pipe(csv())
        .on('data', function (data) {
            orders.push(data);
        })
        .on('error', function (err) {
            deferred.reject(new Error(err))
        })
        .on('end', function (err){
            deferred.resolve(orders);
        });
    return deferred.promise;
}

function setData(data){
    temporaryStorage = data;
}

function getData(){
    return temporaryStorage;
}

function deleteOrder(id){
    if (_.find(temporaryStorage, {'orderId': id})) {
        _.remove(temporaryStorage, {'orderId': id});
        return true;
    }
    return false;
}


module.exports.readData = readData;
module.exports.setData = setData;
module.exports.getData = getData;
module.exports.deleteOrder = deleteOrder;