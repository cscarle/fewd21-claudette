//Wait for the DOM elements to load before executing jQuery
$(document).ready(function () {

    //Prevent page from reloading when "Read more" is clicked
    $('.readmore').click(function (e) {
        e.preventDefault();
        //On clicking "Read more" the new text slides down and "Read more" disappears and "Read less" appears
        $('#show-text').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    });

    //Prevent page from reloading when "Read less" is clicked
    $('.readless').click(function (e) {
        e.preventDefault();
        //On clicking "Read less" the text slides up and "Read less" disappears and "Read more" appears
        $('#show-text').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    });

    //Prevent page from reloading when "Learn More" is clicked
    $('.learnmore').click(function (e) {
        e.preventDefault();
        //On clicking "Learn More" the text slides down and "Learn More" disappears
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
    });

});
