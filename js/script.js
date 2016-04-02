$(document).ready(function() {

	// slick carousel
	$('.single-item').slick({
		//autoplay: false,
		//autoplaySpeed: 3000,
		dots: true
		//pauseOnHover,
		//pauseOnDotsHover,
		//fade: true		
	}); // end of slick

	$('.variable-width').slick({		
		//adaptiveHeight: true,
		//autoplay: false,
		//autoplaySpeed: 3000,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		//centerMode: true,
		variableWidth: false,
		adaptiveHeight: true,
	}); // end of slick

	$('.one-time').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		appendArrows: $('.one-time')
	})


	// for selected link on the nav bar, the text will change color
	var current_path = window.location.pathname.split('/').pop();

	$('.col-nav-standard ul').find("a").each(function(index,value) {
		if($(this).attr('href') == current_path){
			$(this).css('color', '#08192d');
		}
	}); // end of selected link on the nav bar



	function toggleImage1() {
  		$('#show-img1').slideToggle();
	}

	function toggleImage2() {
  		$('#show-img2').slideToggle();
	}

	function toggleImage3() {
  		$('#show-img3').slideToggle();
	}

	$('#show-img1').hide();
	$('#show-img2').hide();
	$('#show-img3').hide();

	$('#quiz-1').click(toggleImage1);
	$('#quiz-2').click(toggleImage2);
	$('#quiz-3').click(toggleImage3);



}); // end of doucment ready