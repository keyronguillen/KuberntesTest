const express = require('express');
var cors = require('cors');

const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const categoryProduct = require('./routes/product');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/product', categoryProduct);

module.exports = app;