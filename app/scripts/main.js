$('#nav li a').click(function() {
	event.preventDefault();
	var sectionId = $(this).attr('id').replace( '-nav','' );
	$('html, body').animate({ scrollTop: $('#'+sectionId).offset().top }, 'slow');	
});