$( document ).ready(function() {
	
	//alert(carouselMaxHeight);
	var winHeight=$(window).height();
	var winWidth=$(window).width();
	
	if(winHeight==640 && winWidth==1136)
		var device = "Iphone5";
	else if(winHeight==640 && winWidth==960 )
		var device = "Iphone4";
	else if(winHeight==320 && winWidth==480)
		var device = "Iphone";
	
		
	//alert(device);
	if(device=="Iphone5")
	{
		var carouselMaxHeight = winHeight * 50 / 100;
		$("#share-lock-img").css("width", "4%");
		$("#page1").css("background-position","0 -100px");
		$("#page1").css("background-size","100% 100%");
		
		//first screen
		$("#app-icon").css("width","72.5%");
		$("#left-div").css("width","54%");
		$("#right-div").css("width","46%");
	}
	else
	{
		var carouselMaxHeight = winHeight * 40 / 100;
	}
	
	if(device=="Iphone4")
	{
		$("#app-icon").css("width","92.3%");
	}
	
	//$(".m-scooch-inner").css("max-height",carouselMaxHeight);    
	
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
		var clickAudio = $(this).attr("audio-file");
		//alert(clickAudio);
		var clickaud = new Audio(clickAudio);
		/*backaudio.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);*/
		clickaud.play();
		
		var preDiv = $( ".control-slider" ).find(".img-selected");		
		//get selected div data-index
		var prevDataIndex=preDiv.attr("data-index");
		//remove class from selected div
		preDiv.removeClass("img-selected");
		//get image of the selected div
		var preImg = preDiv.find("img");
		//change selected images attributes
		preImg.attr("src",beforeSelect[prevDataIndex]);
		preImg.css("width","4%");
		
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
		currentImg.css("width","11.5%");
		
		//alert(nextDataIndex);		
	});	
	/*$("#how-to-play-btn").click(function() {
		//$.mobile.changePage("#page1",{ transition: "slidedown"});
		$( "#popupBasic" ).popup("reposition", {
                x: 70,
                y: 115,
                positionTo: "window"
            });
	});
	*/
	 /*$("#popupBasic").on({
        popupafteropen: function () {
            $(this).popup("reposition", {
                x: 40,
                y: 40,
                positionTo: "origin"
            });
        }

    }); */
    if(window.innerHeight > window.innerWidth){		
		window.location.href = 'index.html';		
	}
});
