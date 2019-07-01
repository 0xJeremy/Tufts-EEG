const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const net = require('net');
const fs = require('fs');

var probes;

//////////////////
/// PARAMETERS ///
//////////////////

const SOCKETPATH = '/tmp/node-python-sock';
const PORT = process.env.PORT || 5000

var server = app.listen(PORT, function() { console.log("Listening on port " + PORT)});
var io = require('socket.io').listen(server);

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

///////////////////////////
/// FRONT-END ENDPOINTS ///
///////////////////////////

app.use(bodyParser.json());
app.set('client', __dirname + '/client');
app.use('/', express.static(__dirname + '/client'));

app.get('/', function(req, res) {
    res.render('../client/index.html');
});

app.get('/getProbe', function(req, res){
	var probeID = req.query.id;
   	console.log('GET Request with id: ' + probeID);
   	res.send(probes);
});

////////////////////////
/// FRONT-END SOCKET ///
////////////////////////

io.on('connection', function(socket){
  console.log('Client Connected!');
  socket.on('disconnect', function(){
    console.log('Client Disconnected :(');
  });
  socket.on('OK', function(msg){
    console.log('Received OK from client');
  });
  socket.on('getProbes', function(msg){
  	io.emit('sendProbes', probes);
  })
});

////////////////////////////
/// PYTHON COMMUNICATION ///
////////////////////////////

const handler = (socket) => {
	socket.on('data', (bytes) => {
		const msg = bytes.toString();
		console.log('Python Data Received: ' + msg);
		probes = JSON.parse(msg);
		io.emit('sendProbes', probes);
	});
};

fs.unlink(
	SOCKETPATH,
	() => net.createServer(handler).listen(SOCKETPATH)
);
