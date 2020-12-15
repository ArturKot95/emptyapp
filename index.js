const express = require('express');
const path = require('path');
const { Client } = require('pg');
const client = new Client();

let server = express();

client.connect()
  .then(() => {
    server.use(express.static(path.join(__dirname, 'dist')));
    server.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  })
  .catch(err => {
    console.error(err); 
  });

if (require.main !== module) {
  module.exports = server;
}