//Implement the red light using jQuery. Don't forget to add the script tags.

jQuery( document ).ready(function() {
	jQuery("#stopButton").click(illuminateRed);
	jQuery("#goButton").click(illuminateGreen);
	jQuery("#slowButton").click(illuminateYellow);

function illuminateRed() {
	clearLights();
	jQuery('#stopLight').css("background-color", "red");
	console.log("red light!");
}

function illuminateGreen() {
	clearLights();
	jQuery('#goLight').css("background-color", "green");
	console.log("green light!");
}

function illuminateYellow() {
	clearLights();
	jQuery('#slowLight').css("background-color", "yellow");
	console.log("yellow light!");
}

function clearLights() {
  jQuery('.bulb').css("background-color", "black");
}

});


