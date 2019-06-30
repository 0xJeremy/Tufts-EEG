////////////////////////
/// GLOBAL VARIABLES ///
////////////////////////

var container, stats;

var camera, scene, renderer;
var directionalLight;

var brainRotation = true;

var mouseX = 0, mouseY = 0;

windowHalfX = window.innerWidth / 2;
windowHalfY = window.innerHeight / 2;

function calculateBrainAspect() {
    return document.getElementById("threejsbrain").offsetWidth / (window.innerHeight * 0.8);
}

var brain;

init();
animate();


function init() {

    //////////////////
    /// INITIALIZE ///
    //////////////////

    var puthere = document.getElementById("threejsbrain");
    container = document.createElement('div');
    puthere.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, calculateBrainAspect(), 1, 2000);
    camera.position.z = -100;

    /////////////
    /// SCENE ///
    /////////////

    scene = new THREE.Scene();

    var ambient = new THREE.AmbientLight(0x111111);
    scene.add( ambient );

    directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0, 0, -1);
    scene.add(directionalLight);

    ///////////////
    /// TEXTURE ///
    ///////////////

    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
	   console.log(item, loaded, total);
    };

    ///////////////////
    /// BRAIN MODEL ///
    ///////////////////

    var loader = new THREE.OBJLoader(manager);
    loader.load( '/static/brain.OBJ', function ( object ) {
	   brain = object;
	   object.position.y = 0;
	   scene.add(object);
    });

    ////////////////
    /// RENDERER ///
    ////////////////

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( document.getElementById("threejsbrain").offsetWidth, window.innerHeight * 0.8 );
    container.appendChild(renderer.domElement);

    // document.addEventListener('mousemove', onDocumentMouseMove, false);

    window.addEventListener('resize', onWindowResize, false);
}

/////////////////
/// CALLBACKS ///
/////////////////

function onWindowResize() {
    camera.aspect = calculateBrainAspect();
    camera.updateProjectionMatrix();
    renderer.setSize( document.getElementById("threejsbrain").offsetWidth, window.innerHeight * 0.8 );
}

// function onDocumentMouseMove( event ) {
//     mouseX = (event.clientX - windowHalfX) / 2;
//     mouseY = (event.clientY - windowHalfY) / 2;
// }

function animate() {
    if (brainRotation) {
        requestAnimationFrame( animate );
        render();
    }
}

function toggleBrainRotation() {
    brainRotation = !brainRotation;
    animate();
}

function render() {

    var r = 7;
    var s = 0.01;

    // We have the camera orbit in a sphere around the brain, having
    // the light follow so it's well-lit.
    camera.position.x = r * Math.sin( mouseX * s ) * Math.cos(mouseY/2 * s);
    camera.position.z = -r * Math.cos( mouseX * s ) * Math.cos(mouseY/2 * s);
    camera.position.y = r * Math.sin(mouseY/2 * s);

    directionalLight.position.x = r * Math.sin( mouseX * s ) * Math.cos(mouseY/2 * s);
    directionalLight.position.z = -r * Math.cos( mouseX * s ) * Math.cos(mouseY/2 * s);
    directionalLight.position.y = r * Math.sin(mouseY/2 * s);

    try {
        brain.rotation.y += 0.003;
    }catch(err) {}
    
    camera.lookAt( scene.position );

    renderer.render( scene, camera );
}