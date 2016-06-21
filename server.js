'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000; // 

app.use('/', express.static('public'));
require('./config/api/routes')(app);

app.listen(port, function(){
	console.log('Listening on port ' + port);
});

module.exports = app;