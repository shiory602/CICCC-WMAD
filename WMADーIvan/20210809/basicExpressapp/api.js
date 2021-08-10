const express = require('express');
var app = express();
const router = express.Router();

app.get('/api', (req, res) => {
  res.send('Change the path.');
});

app.get('/', (req, res) => {
  res.send('test');
})

app.listen(3000, () => {
  console.log('Start server port: 3000');
})