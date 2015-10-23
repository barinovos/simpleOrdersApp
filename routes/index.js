'use strict';

var express = require('express');
var router = express.Router();
var storage = require('../controllers/storage');

/* GET home page. */
router.get('/', function (req, res, next){
    storage.readData().then(function (data){
        storage.setData(data);
        res.render('index', {title: 'BoderGuru App @made by Barinov O'});
    });
});

module.exports = router;
