const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');

module.exports = function (cmd, args) {
    var command = spawn(cmd, args);
    return duplexer(command.stdin, command.stdout);
};