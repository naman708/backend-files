
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label for="productTitle">Product Name</label><input type="text" name="productTitle"><label for="productSize">Product size</label><input type="text" name="productSize"><button type="submit">Add Product</button></form>');
})
app.post('/product',(req,res,next)=>{
   console.log(req.body);
   res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>hi there</h1>');
})


app.listen(3000);
