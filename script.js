//your JS code here. If required.
function daysOfAYear(input) {
	if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log("366");
		
		
    }
	else{
		console.log("365")

	}
	
}
const year = prompt('Enter a year:');