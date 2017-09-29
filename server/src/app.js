var express = require('express')
var path = require('path')
var http = require('http');
var https = require('https');
var fs = require('fs');
var pem = require('pem');


var StaticResourceConfiger = require('./config/StaticResourceConfiger');
var Router = require('./Router');
var Filter = require('./Filter');

var app = express()

new StaticResourceConfiger(app, express)
new Filter(app);
new Router(app);
http.createServer(app).listen(3000);

// var sslOptions = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };
// https.createServer(sslOptions, app).listen(8443)

// pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
//     if (err) {
//         throw err
//     }
//     https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(3000)
// })