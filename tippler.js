$(document).ready(function(){
	$('#tippler').on('click',function(){
		$('#tippler').text('So that I may forget," replied the tippler.').css('margin-left','20px');
		$(this).attr('id','newId');
	});

});