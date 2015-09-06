// take input from the text-field box; parse it as an integer
// check for NaN and call the fizzMe function with the value
// For floats, it truncates to the nearest integer

$('.submit-button').click( function () {
	var iterations = parseInt(document.getElementById('text1').value);

	if (isNaN(iterations)) {
		alert("data is not an integer");
	} else {
		fizzMe(iterations);
	}
});


// function: fizzMe(Integer)
// Takes an Integer argument and counts from 1 to the 
// argument value. Substituting 'fizz', 'buzz' or 'fizzbuzz'

function fizzMe(maxVal) {

	function check(n) {
		var msg = '';
		if (n % 3 == 0) { msg += "Fizz";}
		if (n % 5 == 0) { msg += "Buzz";}
		return msg || n;
	}
	
	for (var i = 1; i <= maxVal; i++) {
		$('.fizzbuzz').append("<p>" + check(i) + "</p>");
	};

}

// clear out the page for an encore
$('.clear-button').click( function() {
	$('.fizzbuzz').empty();
	$('#text1').empty();
})


