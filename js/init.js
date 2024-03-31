//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "17 may 2024 10:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	