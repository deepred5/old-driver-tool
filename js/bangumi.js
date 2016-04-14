(function() {
	var currentPosition = 0;
	var timer = null;

	function getTop(index) {
		var day = document.querySelector('[weekday="' + index + '"]');
		var distance = day.offsetTop;
		day = day.offsetParent;

		while(day) {
			distance += day.offsetTop;
			day = day.offsetParent;
		}

		return distance;
	}

	function runToTop(distance) {
		currentPosition = document.body.scrollTop;
		currentPosition += 15;

		if (currentPosition >= distance) {
			currentPosition = distance;
			clearInterval(timer);
		} 

		document.body.scrollTop = currentPosition;

	}

	if (document.querySelector('[weekday]')) {
		var timer = setInterval(function() {
			runToTop(getTop(new Date().getDay()));
		}, 1);
	}
})()