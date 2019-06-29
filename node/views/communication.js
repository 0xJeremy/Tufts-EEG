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

displayProbe.innerHTML = "<tr><th scope=\"row\">Null</th></td></tr>";

function renderProbeData(msg) {
	if(probeData.length == ENTRIES_DISPLAYED) {probeData.shift();}
	probeData.push(msg);
	var displayText = '';
	for(var i = probeData.length-1; i >= 0; i--) {
		displayText += "<tr><th scope=\"row\">" + probeData[i]['data'] + "</th></td></tr>";
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


