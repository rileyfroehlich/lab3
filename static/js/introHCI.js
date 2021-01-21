'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please Wait...")
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$(".project").click(projectClick)
	$("#myelement").click(changeText)
}

function projectClick(e){
	console.log("Project clicked")
	e.preventDefault()
	//$(this).css("background-color", "green")

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
	   $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>")
    } /*else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}*/
	else{
		$(description).toggle()
	}
}

function changeText(e){
	$(this).text("Changed text")
}