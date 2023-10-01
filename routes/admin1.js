const fs = require('fs');
const express = require('express');
const path =require('path');


const router=express.Router();
const rootDir=require('../util/path');
router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir,'view','admin.html'));
});





module.exports=router;