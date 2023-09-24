const fs=require('fs');
const path=require('path');


    const requestHandler=(req,res)=>{
        const url=req.url;
    const method=req.method;
        if(url==='/'){
            const filePath=path.join(__dirname,"message.txt");
          fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body>${data}</body>`)
    
            res.write(
              '<body><form action="/message" method="POST"><input type="text" name="message1"><input type="text" name="message2"><button type="submit">Send</button></form></body>'
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
              const messages = parsedBody.split('&');
             // console.log(`mas>>>>>${messages}`);
          const message1 = decodeURIComponent(messages[0].split('=')[1]);
          const message2 = decodeURIComponent(messages[1].split('=')[1]);
          const combinedMessage = `${message1} ${message2}`;
              fs.writeFile('message.txt', combinedMessage, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
              });
            });
          }
    }
      module.exports=requestHandler;