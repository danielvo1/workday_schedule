setInterval( function(){
	var now = moment().format('MMM Do YYYY hh:mm:ss' );
	$('#currentDay').text(now);
}, 0)

