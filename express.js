const express = require('express');

const app = express();

app.get('/', (req, res) => {
res.send('<h1> On </h1>'); 
});

app.listen(3000, () => {
  console.log('24/7 on')
});