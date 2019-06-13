"use strict";

const http = require('http');
var through = require('through2');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.method === 'POST') {
        var stream = through( function (buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        });
        req.pipe(stream).pipe(res);
    } 
    else {
        res.end('Only POST requests with body.');
    }
}).listen(Number(process.argv[2]));