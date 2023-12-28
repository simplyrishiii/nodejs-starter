const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.setHeader = ('Content-type','text/html')
    res.statusCode = 200;
    console.log(req.url);

    if(req.url=='/'){
        res.statusCode = 200;
        res.end('<h1> This is Rishi </h1> <p> I am currently learning Nodejs!</p>');
    }

    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is about Rishi </h1> <p> I am currently learning about Nodejs!</p>');
    }
    else if(req.url == "/hello"){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        // res.rishi();
        res.statusCode = 404;
        res.end('<h1> Page not found </h1> <p> Server error!</p>');
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);  
})