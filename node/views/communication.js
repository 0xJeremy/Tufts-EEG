// var xhr = new XMLHttpRequest();

////////////////////////
/// GLOBAL VARIABLES ///
////////////////////////

var displayProbe = document.getElementById("probeTable");
var probeData = []
var socket = io();
var ENTRIES_DISPLAYED = 5;

/////////////////////////
/// API COMMUNICATION ///
/////////////////////////

// LOCAL_PATH = 'http://localhost:5000/getProbe?id=0';

// xhr.onreadystatechange = function() {
// 	if(this.readyState == 4 && this.status == 200) {
// 		console.log('State Change!');
// 		console.log(this.responseText);
// 		text.innerHTML = this.responseText;
// 	}
// };

// xhr.open('GET', LOCAL_PATH, true);
// xhr.send();

/////////////////////////
/// DISPLAY FUNCTIONS ///
/////////////////////////

displayProbe.innerHTML = "<tr><th scope=\"row\">NaN</th><td>Null</td><td>Null</td></tr>";

function renderProbeData(msg) {
	if(probeData.length == ENTRIES_DISPLAYED) {probeData.shift();}
	probeData.push(msg);
	var displayText = '';
	for(var i = probeData.length-1; i >= 0; i--) {
		displayText += "<tr><th scope=\"row\">" + probeData[i]['time'] + 
			           "</th><td>" + probeData[i]['data'] + 
			           "</td><td>Python Processing</td></tr>";
	}
	displayProbe.innerHTML = displayText;
}

////////////////////////////
/// SOCKET COMMUNICATION ///
////////////////////////////

socket.emit('OK');

socket.on('sendProbes', function(msg) {
	console.log(msg);
	renderProbeData(msg);
})


