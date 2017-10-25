#!/usr/bin/env node

const electron = require('electron');
const path = require('path');

const proc = require('child_process');

const child = proc.spawn(electron, [ path.resolve(__dirname, 'app.js')].concat(process.argv.slice(2)), {stdio: 'inherit'});

child.on('close', function (code) {
    process.exit(code)
});