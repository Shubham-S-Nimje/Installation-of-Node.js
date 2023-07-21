const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.headers, req.method)
    url = req.url
    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><Title>My First Page</Title></head>');
        res.write('<body><h1>Hello world</h1></body>');
        res.write('</body>');
        res.end();
    }
    else if(url === '/home'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><Title>My First Page</Title></head>');
        res.write('<body><h1>Welcome to Home Page</h1></body>');
        res.write('</body>');
        res.end();
    }
    else if(url === '/about'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><Title>My First Page</Title></head>');
        res.write('<body><h1>Welcome to About Page</h1></body>');
        res.write('</body>');
        res.end();
    }
    else if(url === '/node'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><Title>My First Page</Title></head>');
        res.write('<body><h1>Welcome to my Nodejs Project</h1></body>');
        res.write('</body>');
        res.end();
    }
})

server.listen(4000)