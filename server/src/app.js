var express = require('express')
var path = require('path')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(express.static('client')) //client dose not have to be the part of url
// app.use('/client', express.static('client')) //client has to be the part of url
// app.use('/client', express.static(path.join(__dirname, 'client')))
 
app.listen(3000)