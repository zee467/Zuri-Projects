const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html');
const aboutPage = readFileSync('./about.html');
const contactPage = readFileSync('./contact.html');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/" || url === "/home") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(homePage);
    }
    else if (url === "/about") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(aboutPage);
    }
    else if (url === "/contact") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(contactPage);
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('<h1>page not found</h1>');
    }
})


server.listen(4000);