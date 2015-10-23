'use strict';

var express = require('express');
var router = express.Router();
var sorting = require('../controllers/business-logic');

//GET orders sorted by company name
// @params 'name'
router.get('/orders-by-company', function (req, res, next){
    var companyName = req.query.name;
    var items = sorting.getOrderItemsByCompanyName(companyName);
    res.send(items);
});

//GET orders sorted by customers address
//@params 'address'
router.get('/orders-by-address', function (req, res, next){
    var customerAddress = req.query.address;
    var items = sorting.getOrderItemsByCustomerAddress(customerAddress);
    res.send(items);
});

//DELETE order by orderId
//@params 'id'
router.delete('/delete-order', function (req, res, next){
    var orderId = req.query.id;
    var result = sorting.deleteOrderById(orderId) ? 'success' : null;
    res.send(result);
});

//GET all items from orders sorted by frequency in DESC order
router.get('/list-orders', function (req, res){
    var items = sorting.sortOrdersByDescending();
    res.send(items);
});

module.exports = router;