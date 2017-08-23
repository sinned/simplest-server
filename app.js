'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const _ = require('lodash');

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res) {
  let jsonStuff = JSON.stringify(req.query, null, 2)
  let htmlOut = 'Hello GET!'
  htmlOut += ' Base URL:' + req.baseUrl
  htmlOut += '<pre>' +jsonStuff+ '</pre>'
  res.send(htmlOut)
})

app.post('/', function (req, res) {
  console.log('req.body', req.body);
  let jsonStuff = JSON.stringify(req.body, null, 2)
  console.log('POST', jsonStuff)
})

app.listen(process.env.PORT, function () {
  console.log('Simplest server listening on ' +process.env.PORT+ '!')
})
