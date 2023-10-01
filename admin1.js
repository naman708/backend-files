const fs = require('fs');
const express = require('express');
const path =require('path');
const productController=require('../controllers/product')

const router=express.Router();
const rootDir=require('../util/path');
router.get('/', productController.adminpage);





module.exports=router;