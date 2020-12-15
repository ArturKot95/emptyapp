const express = require('express');
const path = require('path');

let server = express();
let port = process.env.PORT || 3000;
server.set('port', port);

const buildPath = path.join(__dirname, '../', '../', 'build');
server.use(express.static(buildPath));
server.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

module.exports = server;