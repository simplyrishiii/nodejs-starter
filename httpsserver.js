const {Console} = require('console');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader = ('Content-type','text/html')
    res.end('<h1> This is Rishi </h1> <p> I am currently learning Nodejs!</p>');
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);  
})