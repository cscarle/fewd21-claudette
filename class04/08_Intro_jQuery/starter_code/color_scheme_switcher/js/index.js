jQuery( document ).ready(function() {
	jQuery('#grayButton').click(switchGray);
	jQuery('#whiteButton').click(switchWhite);

	function switchGray(){
		jQuery('body').css("background-color", "gray");
		console.log("I'm gray!");
	}

	function switchWhite(){
		jQuery('body').css("background-color", "white");
		console.log("I'm white!");
	}

    // console.log( "ready!" );
});


// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }
