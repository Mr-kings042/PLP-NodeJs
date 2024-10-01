// const http = require('http');

// const server = http.createServer((request, response) =>{
//     response.statusCode = 200;
//     response.setHeader('content-Type', 'text/plain')
//     response.end('Hello, wed dev class');
// })

// const PORT = 9000;
// server.listen(PORT, () =>{
//     console.log('server running on port 3000');
//     });


const http = require('http');

const server = http.createServer((request, response) =>{
  if (request.url === '/') {
    response.writeHead(200,{'content-Type' : 'text/plain'})
    response.end('Hello, welcome to wed dev class');
  }else if (request.url === '/about'){
    response.writeHead(200,{'content-Type' : 'text/plain'})
    response.end('This is about wed dev class');
    }else{
        response.writeHead(404,{'content-Type' : 'text/plain'})
        response.end('Page not found');   
  }
})

const PORT = 9000;
server.listen(PORT, () =>{
    console.log('server running on port 3000');
    });