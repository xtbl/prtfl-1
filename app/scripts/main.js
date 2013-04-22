(function($) {

	/**
	 *	on nav clicks scroll to corresponding section
	 */
	$('#nav li a').click(function() {
		event.preventDefault();
		var sectionId = $(this).attr('id').replace( '-nav','' );
		$('html, body').animate({ 
			scrollTop: $('#'+sectionId).offset().top }, 
			'slow'
		);	
	});
	/**
	 *	accordion
	 */
	var allPanels = $('.accordion > dd').hide();
	var allPanelTitles = $('.accordion > dt a');

	$('.accordion > dt > a').click(function(e) {
	  e.preventDefault();
	  $this = $(this);
	  $target =  $this.parent().next();
	  allPanelTitles.find('span').text('+');

	  if(!$target.hasClass('active')){
	    allPanels.removeClass('active').slideUp();
	    allPanelTitles.removeClass('active-link');
	    $this.find('span').text('-');
	    $this.addClass('active-link');
	    $target.addClass('active').slideDown();
	  }else {
	  	$target.removeClass('active').slideUp();
	  	allPanelTitles.removeClass('active-link');
	  }
	return false;
	});



})(jQuery);