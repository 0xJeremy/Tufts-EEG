// var xhr = new XMLHttpRequest();
var text = document.getElementById("comTest");
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

socket.emit('OK');

socket.on('sendProbes', function(msg) {
	console.log(msg);
	text.innerHTML = msg.message;
})