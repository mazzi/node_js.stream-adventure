var fs = require('fs');

var file = fs.createReadStream(process.argv[2])
            .pipe(process.stdout);
