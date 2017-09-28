var express = require('express')
var path = require('path')
var StaticResourceConfiger = require('./config/StaticResourceConfiger');
var Router = require('./Router');

var app = express()

new StaticResourceConfiger(app, express)
new Router(app);
 
app.listen(3000)