const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const figur = require('./modules/disney');

http.createServer(function (req, res) {
    res.write(figur.fullname());
    res.write(figur.birthday);
    res.end();
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);
