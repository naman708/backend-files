const express = require('express');
const fs = require('fs');
const path =require('path');
const router=express.Router();
const rootDir=require('../util/path');
router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(rootDir,'view','form.html'));
});


module.exports=router;