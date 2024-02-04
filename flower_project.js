"use strict";
$(document).ready(function() {
	// preload images
    $("#image_list a").each( (index, link) =>{
        const image = new Image();
        image.src = link.href;      
});

	
	// set up event handlers for links    
	$("#image_list a").click((evt)=> {
        //fadeOut
        $("#image, #caption").fadeOut(1000, () => {
        
        //evt.currentTarget is the clicked image
        const imageURL = $(evt.currentTarget).attr("href");
		$("#image").attr("src", imageURL);

		const caption = $(evt.currentTarget).attr("title");
		$("#caption").text(caption);
            //fade in after updating
            $("#image, #caption").fadeIn(1000);
            
        });
        
		// cancel the default action of the link
	    evt.preventDefault();
      
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready