// Function to get the start date formatted using Moment library.
function timeStamp1(){
	var y = new moment().format('MM/DD/YYYY h:mm a');
	document.getElementById('starttime').value = y;
}

// Function to get the end date formatted using Moment library.
function timeStamp2(){
	var z = new moment().format('MM/DD/YYYY h:mm a');
	document.getElementById('endtime').value = z;
}

// Making the button call the function to get the date using script instead of inline.
var starttime = document.getElementById('starttimebutton');
starttime.addEventListener("click", timeStamp1, false);

// Making the button call the function to get date.
var endtime = document.getElementById('endtimebutton');
endtime.addEventListener("click", timeStamp2, false);

	
