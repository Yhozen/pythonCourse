const express = require('express')
const app = express()
const getData = require('./compile').compileNRun

const port = (process.env.PORT || 8000)

app.set('json spaces', 2)

app.listen(port, () => {
  console.log('We are live on ' + port);
})

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
 })
 
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    res.json(getData())
})
