$( document ).ready(function() {
	// Handler for .ready() called.
    var beforeSelect = new Array();
	beforeSelect[1]="img/01-red.svg";
	beforeSelect[2]="img/02-orange.svg";
	beforeSelect[3]="img/03-yellow.svg";
	beforeSelect[4]="img/04-green.svg";
	beforeSelect[5]="img/05-blue.svg";
	beforeSelect[6]="img/06-indigo.svg";
	beforeSelect[7]="img/07-violet.svg";
	beforeSelect[8]="img/08-white.svg";
	beforeSelect[9]="img/09-black.svg";
	beforeSelect[10]="img/10-brown.svg";
	
	var afterSelect = new Array();
	afterSelect[1]="img/01 Red.svg";
	afterSelect[2]="img/02 Orange.svg";
	afterSelect[3]="img/03 Yellow.svg";
	afterSelect[4]="img/04 Green.svg";
	afterSelect[5]="img/05 Blue.svg";
	afterSelect[6]="img/06 Indigo.svg";
	afterSelect[7]="img/07 Violet.svg";
	afterSelect[8]="img/08 White.svg";
	afterSelect[9]="img/09 Black.svg";
	afterSelect[10]="img/10 Brown.svg";
		
	$( ".control-div" ).click(function() {
		//find selected div 		
		var preDiv = $( ".control-slider" ).find(".img-selected");		
		//get selected div data-index
		var prevDataIndex=preDiv.attr("data-index");
		//remove class from selected div
		preDiv.removeClass("img-selected");
		//get image of the selected div
		var preImg = preDiv.find("img");
		//change selected images attributes
		preImg.attr("src",beforeSelect[prevDataIndex]);
		preImg.css("width","7.5%");
		
		//alert(prevDataIndex);
		//get clicked div
		var nextDataIndex = $(this).attr("data-index");
		//add removed class to make current div active
		$(this).addClass("img-selected");
		//move slide related to current div
		$('.m-scooch').scooch('move', nextDataIndex);
		
		//get image under currently clicked div
		var currentImg=$(this).find("img");
		//change attribute of currently selected images
		currentImg.attr("src",afterSelect[nextDataIndex]);
		currentImg.css("width","18.5%");
		
		//alert(nextDataIndex);		
	});	
});
