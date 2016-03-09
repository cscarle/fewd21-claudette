//wait for the DOM (document) elements to load before JQuery is executed
$(document).ready(function() {

  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function() {
    event.preventDefault();

    //create a var and have it assigned/equal to the string value of the user's input
    var city = $('#city-type').val();

    // **** QUESTION:  why is .val() from line 9 now written as .val('')? ****
    $('#city-type').val('');

    //convert the user's input to all lowercase letters and remove any white spaces before and/or after the input
    city = city.toLowerCase().trim();

    //if the user inputs NYC or New York or New York City, then change the css class to 'nyc'
    if(city == 'nyc' || city == 'new york' || city == 'new york city') {
      $('body').attr('class','nyc');
    }

    //if the user inputs SF or San Francisco or Bay Area, then change the css class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }

    //if the user inputs ATX or Austin, then change the css class to 'atx'
    else if (city == 'atx' || city == 'austin') {
      $('body').attr('class','austin');
    }

    //if the user inputs LA or Los Angeles or LAX, then change the css class to 'la'
    else if (city == 'la' || city == 'los angeles' || city == 'lax') {
      $('body').attr('class','la');
    }

    //if the user inputs SYD or Sydney, then change the css class to 'syd'
    else if (city == 'syd' || city == 'sydney') {
      $('body').attr('class','sydney');
    }

  });

});