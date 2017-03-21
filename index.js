$('.readmore').click(expand);

function expand(){
	$('#show-this-on-click').slideDown();
	$('.readmore a').hide();
	$('.readless').show();

}

$('.hide').click(hide);

function hide(){
	$('.hide').slideUp();
	$('a').show();
	
}

$('.learnmore').click(span);
function span(){
	$('#learnmoretext').show();
}


