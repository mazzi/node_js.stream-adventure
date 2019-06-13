const trumpet = require('trumpet');
const through = require('through');

var tr = trumpet();

var stream = through( function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next;
});

// pipe to trumpet and stdout
process.stdin.pipe(tr).pipe(process.stdout);

// catch the loud element and transform through (RW stream)
const loudElem = tr.select('.loud').createStream();
loudElem.pipe(stream).pipe(loudElem);

