/* Basic Loading Bar For Page Content */
 
jQuery.loadingStatus	 = function() {
	// adding loading panel
	var loading_bar = $("<div id='loading_wrap' style='position:fixed;width:150px; height:30px; padding:5px; background-color:#4592b1;z-index:100;overflow:hidden; top:0; left:0;-moz-box-shadow: 2px 2px 3px #f5f5f5;-webkit-box-shadow: 2px 2px 3px #f5f5f5;box-shadow: 2px 2px 3px #f5f5f5;-moz-border-radius-bottomright: 5px;border-bottom-right-radius: 5px;padding-left:10px;'>Loading, please wait</div>");
	$('body').prepend(loading_bar);
	console.log("adding loading bar");
	$(window).load(function() {loading_bar.fadeOut('normal'); })
};
