'use strict';
const server = require('./server.js');

const port = process.env.port || 5050;
server.start(port);