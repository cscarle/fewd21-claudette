//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {
	$("#stopButton").click(illuminateRed);
	$("#goButton").click(illuminateGreen);
	$("#slowButton").click(illuminateYellow);

function illuminateRed() {
	clearLights();
	$('#stopLight').css("background-color", "red");
	console.log("red light!");
}

function illuminateGreen() {
	clearLights();
	$('#goLight').css("background-color", "green");
	console.log("green light!");
}

function illuminateYellow() {
	clearLights();
	$('#slowLight').css("background-color", "yellow");
	console.log("yellow light!");
}

function clearLights() {
  $('.bulb').css("background-color", "black");
}

});


