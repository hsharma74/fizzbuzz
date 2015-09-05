$('.start-button').click( function () {
	
	for (var i = 1; i <= 100; i++) {
		if ( (i % 3 === 0) && (i % 5 == 0) ) {
		  $('.fizzbuzz').append("<p>FizzBuzz</p>");
		} else if (i % 3 === 0) {
		  $('.fizzbuzz').append("<p>Fizz</p>");
		} else if (i % 5 === 0) {
		  $('.fizzbuzz').append("<p>Buzz</p>");
		} else {
		  $('.fizzbuzz').append("<p>" + i + "</p>");
		}
	
	};

});

// clear out the page for an encore
$('.clear-button').click( function() {
	$('.fizzbuzz').empty();
})


