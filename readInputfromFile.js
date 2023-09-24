const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
        const filePath=path.join(__dirname,"message.txt");
      fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body>${data}</body>`)
        res.write(
          '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
      });
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
      }
})
server.listen(4000);
