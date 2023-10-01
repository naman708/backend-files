const express = require('express');
const fs = require('fs');
const path =require('path');
const router=express.Router();
const productController=require('../controllers/product')

const rootDir=require('../util/path');
router.get('/contact-us',productController.contractuspage);


module.exports=router;