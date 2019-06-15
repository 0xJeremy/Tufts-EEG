const http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const express = require('express')
const path = require('path')
var app = express();
var bodyParser = require('body-parser');
const net = require('net');
const fs = require('fs');

//////////////////
/// PARAMETERS ///
//////////////////

const SOCKETPATH = '/tmp/node-python-sock';
const PORT = process.env.PORT || 5000

///////////////////////
/// EXPRESS HEADERS ///
///////////////////////

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname + '/views'));

///////////////////////////
/// FRONT-END ENDPOINTS ///
///////////////////////////

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/getProbe', function(req, res){
	var probeID = req.query.id;
   	console.log('GET Request with id: ' + probeID);
   	res.send(probe[probeID]);
});

////////////////////////////
/// PYTHON COMMUNICATION ///
////////////////////////////

const handler = (socket) => {
	socket.on('data', (bytes) => {
		const msg = bytes.toString();
		console.log('Probe Data Received: ' + msg);
		probes = JSON.parse(msg);
	});
};

fs.unlink(
	SOCKETPATH,
	() => net.createServer(handler).listen(SOCKETPATH)
);