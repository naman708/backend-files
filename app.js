const path =require('path');

const express = require('express');
const fs = require('fs');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();



const adminRoutes=require('./routes/admin1');
const homeRoutes=require('./routes/contact');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(homeRoutes);
const rootDir=require('./util/path');
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'view','404.html'));
});


app.listen(3000);
