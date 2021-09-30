setInterval( function(){
	var now = moment().format('MMM Do YYYY hh:mm:ss');
	$('#currentDay').text(now);
}, 0)







//when save button is pressed the input items are saved
document.querySelectorAll('#button-addon2').forEach(item => {
	item.addEventListener('click', event => {
		console.log('saved');
	})
})

