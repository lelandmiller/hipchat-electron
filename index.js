#!/bin/env node
var exec = require('child_process').execSync;
exec(__dirname + '/node_modules/.bin/electron src/main.js', {
    cwd: __dirname
});
