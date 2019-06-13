"use strict";

var concat = require('concat-stream');

process.stdin
    .pipe(concat((text) => process.stdout
        .write(text.toString().split('').reverse().join(''))
    ));
