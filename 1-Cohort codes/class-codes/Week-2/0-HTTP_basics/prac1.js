const http = require('http');

const server = http.createServer((request, response) => {
    const path = request.url.toLowerCase();

    if (path === '/' || path === '/home') {
        response.end('Home Page');
    } else if (path === '/about') {
        response.end('About Page');
    } else if (path === '/contact') {
        response.end('Contact Page');
    } else {
        response.end('404 Not Found!');
    }
})

PORT = 8000
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server started on http://localhost:${PORT}/`);
})