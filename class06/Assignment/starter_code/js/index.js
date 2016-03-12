//create a var and assign (equal) it to the names of the cities
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//wait for the DOM (document) elements to load before JQuery is executed
$(document).ready(function() {

  // 1) set a variable before the loop starts and assign it to zero (var i = 0);
  // 2) define the condition for the loop to run (i must be less than 5 -- the total of the cities.length);
  // 3) increase a value (i++) each time the code block in the loop has been executed
  for(i = 0; i < cities.length; i++) {

    //not sure what this means -- can I get an explanation of this?
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

  //are we grabbing the city-type from the user's input?
  $('form').on('change', '#city-type', function() {

    //create a var and have it assigned/equal to the string value of the user's input
    var city = $('#city-type').val();

    //if the user selects NYC from the dropdown menu, then change the css class to 'nyc'
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }

    //if the user selects SF from the dropdown menu, then change the css class to 'sf'
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }

    //if the user selects ATX from the dropdown menu, then change the css class to 'atx'
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }

    //if the user selects LA from the dropdown menu, then change the css class to 'la'
    else if (city == 'LA') {
      $('body').attr('class','la');
    }

    //if the user inputs SYD from the dropdown menu, then change the css class to 'syd'
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }

  });

});