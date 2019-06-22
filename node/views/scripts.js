// var xhr = new XMLHttpRequest();
var displayProbe = document.getElementById("probeTable");
var socket = io();

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

displayProbe.innerHTML = "<tr><th scope=\"row\">NaN</th><td>Null</td><td>Null</td></tr>";

socket.emit('OK');

socket.on('sendProbes', function(msg) {
	console.log(msg);
	displayProbe.innerHTML = "<tr><th scope=\"row\">" + msg.time + "</th><td>" + msg.data + "</td><td>Python Processing</td></tr>";
})


