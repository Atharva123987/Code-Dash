const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');



const server = http.createServer(app);

app.post('/', (req, res) => {
  if (req.body.text && req.body.text.toLowerCase() === 'hello') {
    return res.send('Hello');
  }
  return res.status(400).send('Bad request');
});

// Start the server
server.listen(3002, () => {
  console.log('Server listening on port 3002');
});
