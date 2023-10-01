
const express = require('express');
const fs = require('fs');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();


const adminRoutes=require('./routes/admin');
const homeRoutes=require('./routes/home');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
//app.use(homeRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(3000);
