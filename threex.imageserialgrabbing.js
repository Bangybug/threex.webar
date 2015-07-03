var THREEx = THREEx || {}

/**
 * Grabs series of images from another service, such as "IP Webcam" - https://play.google.com/store/apps/details?id=com.pas.webcam&hl=en 
 * Useful when you want to use Smartphone's built in camera.
 */
THREEx.ImageSerialGrabbing = function(){
	var url = 'http://10.7.8.75:8080/shot.jpg';
	var captureTimeout = 100;
	var timerId = null;
	var domElement  = document.createElement('img')

	function scheduleShot()
	{
		if (timerId)
			clearTimeout(timerId);

		timerId = setTimeout(function(){ 
			domElement.src  = url+"?rnd="+Math.floor(Math.random()*1000000);
			scheduleShot();
		}, captureTimeout);
	}

    scheduleShot();

    domElement.crossOrigin = "Anonymous";

    domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'

    domElement.style.top = '50%'
    domElement.style.left = '50%'
    domElement.style.marginRight = '50%'
    domElement.style.transform = 'translate(-50%, -50%)'

    domElement.style.maxWidth = '100%'
    domElement.style.maxHeight = '100%'

    domElement.style.width = 'auto'
    domElement.style.height = 'auto'

    this.domElement = domElement
}
