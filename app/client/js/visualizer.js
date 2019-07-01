var heatmapInstance = h337.create({
	container: document.getElementById('heatmap')
});

var points = []

function calculatePoints() {
	points = []
	points.push()
}

function populateHeatmap() {
	var points = [];
	var max = 0;
	var width = window.innerWidth;
	var height = window.innerHeight;

	// POINT 1
	var val = 50;
	var radius = 50;
	max = Math.max(max, val);
	var point = {
		x: width * 0.3,
		y: height * 0.3,
		value: val,
		radius: radius
	};
	points.push(point);

	// POINT 2
	var val = 50;
	var radius = 50;
	max = Math.max(max, val);
	var point = {
		x: width * 0.5,
		y: height * 0.25,
		value: val,
		radius: radius
	};
	points.push(point);

	// POINT 3
	var val = 50;
	var radius = 50;
	max = Math.max(max, val);
	var point = {
		x: width * 0.25,
		y: height * 0.5,
		value: val,
		radius: radius
	};
	points.push(point);

	// POINT 4
	var val = 50;
	var radius = 50;
	max = Math.max(max, val);
	var point = {
		x: width * 0.4,
		y: height * 0.5,
		value: val,
		radius: radius
	};
	points.push(point);

	var data = { 
		max: max, 
		data: points 
	};

	heatmapInstance.setData(data);
}

populateHeatmap();

function pageResize() {
	populateHeatmap();
}
