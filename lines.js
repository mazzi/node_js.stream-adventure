var split = require('split');

var through = require('through2');
var even = false;

var tr = through( function (buf, _, next) {
    const line = buf.toString();
    this.push( even
        ? line.toUpperCase() + '\n'
        : line.toLowerCase() + '\n'
    );
    even = !even;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
