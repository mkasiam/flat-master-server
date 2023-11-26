const express = require('express');
const app = express();
const port = 5000;

//middlewares

app.get('/', (req, res) => {
  res.send('Flat Master Server is running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})