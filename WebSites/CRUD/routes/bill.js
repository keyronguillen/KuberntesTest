const express = require('express');
const connection = require('../connection');
const router = express.Router();
let ejs = require('ejs');
let pdf =  require('html-pdf');
let path = require('path');
var fs = require('fs');
var uuid = require('uuid');
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/generateReport', auth.authenticateToken, (req,res) => {
    const generatedUuid = uuid.v1();
    const orderDetails = req.body;
    var productDetailReport = JSON.parse(orderDetails.productDetails);

    query = "insert into bill (name, uuid, email, contactNumber, paymentMethod, total, productDetails, createdBy) values (?,?,?,?,?,?,?,?)";
    connection.query(query, [orderDetails.name, generatedUuid, orderDetails.email, orderDetails.contactNumber, orderDetails.paymentMethod, orderDetails.totalAmount, orderDetails.productDetails, res.locals.email], (err,results) => {
        if(!err){

        }else{
            return res.status(500).json
        }
    });
})