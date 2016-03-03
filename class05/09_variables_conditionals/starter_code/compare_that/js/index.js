var comparison;

function compare() {
    var a = $('#a').val();
    var b = $('#b').val();

    if (a < b) {
        comparison = '<';
    	}
    else if (a > b) {
        comparison = '>';
    	}
    else if (a === b) {
        comparison = '===';
    	}
   	else {
        comparison = "N/A";
    	}

    console.log(comparison);

    $('#comparison').html(comparison);
}

$(document).ready(function() {
    $('#submit').click(compare);
});