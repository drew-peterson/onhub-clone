'use strict';

var fs = require('fs');
var express = require('express');
var app = express();

module.exports = function(app){

	app.get('/api/route', function(req, res){
		res.json({response: data});
	}); 
	// Catch All
	app.get('*', function(req, res) {
		res.sendFile('index.html', {root: 'public'});
	});
};
