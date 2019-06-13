const crypto = require('crypto');
const zlib = require('zlib');
const tar = require('tar');
const through = require('through');

const parser = new tar.Parse();
parser.on('entry', function (e) {
    if (e.type !== 'File') return e.resume()

    var hasher = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hasher).pipe(through(function (hash) {
        process.stdout.write(hash + ' ' + e.path + '\n');
    }));
});

const gunzip = zlib.createGunzip();
const decipher = crypto.createDecipher(process.argv[2], process.argv[3]);

process.stdin
    .pipe(decipher)
    .pipe(gunzip)
    .pipe(parser);
