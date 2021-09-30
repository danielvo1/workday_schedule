//list of all the time blocks
var time_blocks = ['9', '10', '11', '12', '1', '2', '3', '4', '5'];

//function that changes the form background depending on current time
function color_block(array) {
	var found = false;
	for (i = 0; i < time_blocks.length; i++) {
		$('#' + (time_blocks[i]) ).css('backgroundColor', 'red');
	 	if (moment().format('h') == time_blocks[i]) {
	 		var cur_time = $('#' + (moment().format('h')));
	 		cur_time.css('backgroundColor' ,'yellow');
	 		found = true;
	 } else if (found){
	 	$('#' + (time_blocks[i]) ).css('backgroundColor', 'green');
	 } else {
	 	continue;
	 }
	 } 
};


//current time
setInterval( function(){
	var now = moment().format('MMM Do YYYY hh:mm:ss');
	$('#currentDay').text(now);
	color_block(time_blocks);
}, 0)

// loads the text that is in your local storage 
function loadText() {
	for (i = 0; i < time_blocks.length; i++) {
	var stored_text = localStorage.getItem(time_blocks[i]);
	var cur_block = document.getElementById(time_blocks[i]);
	cur_block.value = stored_text;
	}
}

//saves user input in local storage
function saveContent(clicked) {
	// userInput = document.querySelector();
	console.log(document.getElementById(clicked));
	var userInput = document.getElementById(clicked)
	localStorage.setItem(clicked , userInput.value);
}

//loads in the old text
loadText();

