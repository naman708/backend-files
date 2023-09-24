
const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('naman pawar');

});
server.listen(4000);