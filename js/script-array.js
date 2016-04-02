//Create variables to store images, increment variable, and a maximum images variable.
var images=["images/beforebirth/beforebirth1.jpg", 
	"images/beforebirth/beforebirth2.jpg",
	"images/beforebirth/beforebirth3.jpg",
	"images/beforebirth/beforebirth4.jpg",
	"images/beforebirth/beforebirth5.jpg",
	"images/beforebirth/beforebirth6.jpg"];
var i=0;
var maxImages = images.length-1;

//Function for previous image.
function previousImage() {
	console.log('prev works');
	//If increment var is greater than 0, increment back, else stay at max images, else increment image.
	if(i > 0 ) {
	 	i--;
	}  else  { 
		i = maxImages; 
	}
	changeImage(i);
}

//Function for next image.
function nextImage() {
	console.log('next works');
	//If increment var is less than 0, increment next, else start at 0, else change image.
	if(i < maxImages ) { 
		i++;
	}  else  { 
		i = 0; 
	} 
	changeImage(i);
}

//Function to change the image.
function changeImage() {
	//Update img src to current image.
	$(".img-carousel").attr("src",images[i]);
}

//Event listeners.
$(document).ready(function() {
	//Next image click.
	$(".btn-wrapper .next").on("click",nextImage);
	//Previous image click.
	$(".btn-wrapper .back").on("click",previousImage);
});