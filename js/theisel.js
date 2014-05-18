$( document ).ready(function() {
	// Handler for .ready() called.
	
	var backaudio = new Audio("audio/Background Audio Files/Looping-Background-Music.wav");
	backaudio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	backaudio.play();
		
	//red selected array
	var redSelected = new Array();
	redSelected[1]="img/red/Color-Lab_Red-1c.svg";
	redSelected[2]="img/red/Color-Lab_Red-2c.svg";
	redSelected[3]="img/red/Color-Lab_Red-3c.svg";
	redSelected[4]="img/red/Color-Lab_Red-4c.svg";
	
	//red swiching array
	var redAfterClick = new Array();
	redAfterClick[1]="img/red/Color-Lab_Red-1b.svg";
	redAfterClick[2]="img/red/Color-Lab_Red-2b.svg";
	redAfterClick[3]="img/red/Color-Lab_Red-3b.svg";
	redAfterClick[4]="img/red/Color-Lab_Red-4b.svg";
	
	//Orange array
	var orangeSelected = new Array();
	orangeSelected[1]="img/orange/Color-Lab_orange-1c.svg";
	orangeSelected[2]="img/orange/Color-Lab_orange-2c.svg";
	orangeSelected[3]="img/orange/Color-Lab_orange-3c.svg";
	orangeSelected[4]="img/orange/Color-Lab_orange-4c.svg";
	
	//orange swiching array
	var orangeAfterClick = new Array();
	orangeAfterClick[1]="img/orange/Color-Lab_orange-1b.svg";
	orangeAfterClick[2]="img/orange/Color-Lab_orange-2b.svg";
	orangeAfterClick[3]="img/orange/Color-Lab_orange-3b.svg";
	orangeAfterClick[4]="img/orange/Color-Lab_orange-4b.svg";
	
	//yellow array
	var yellowSelected = new Array();
	yellowSelected[1]="img/yellow/Color-Lab_Yellow-1c.svg";
	yellowSelected[2]="img/yellow/Color-Lab_Yellow-2c.svg";
	yellowSelected[3]="img/yellow/Color-Lab_Yellow-3c.svg";
	yellowSelected[4]="img/yellow/Color-Lab_Yellow-4c.svg";
	
	//yellow swiching array
	var yellowAfterSelected = new Array();
	yellowAfterSelected[1]="img/yellow/Color-Lab_Yellow-1b.svg";
	yellowAfterSelected[2]="img/yellow/Color-Lab_Yellow-2b.svg";
	yellowAfterSelected[3]="img/yellow/Color-Lab_Yellow-3b.svg";
	yellowAfterSelected[4]="img/yellow/Color-Lab_Yellow-4b.svg";
	
	//green array
	var greenSelected = new Array();
	greenSelected[1]="img/green/Color-Lab_Green-1c.svg";
	greenSelected[2]="img/green/Color-Lab_Green-2c.svg";
	greenSelected[3]="img/green/Color-Lab_Green-3c.svg";
	greenSelected[4]="img/green/Color-Lab_Green-4c.svg";
		
	//green swiching array
	var greenAfterSelected = new Array();
	greenAfterSelected[1]="img/green/Color-Lab_Green-1b.svg";
	greenAfterSelected[2]="img/green/Color-Lab_Green-2b.svg";
	greenAfterSelected[3]="img/green/Color-Lab_Green-3b.svg";
	greenAfterSelected[4]="img/green/Color-Lab_Green-4b.svg";
	
	//blue array
	var blueSelected = new Array();
	blueSelected[1]="img/blue/Color-Lab_Blue-1c.svg";
	blueSelected[2]="img/blue/Color-Lab_Blue-2c.svg";
	blueSelected[3]="img/blue/Color-Lab_Blue-3c.svg";
	blueSelected[4]="img/blue/Color-Lab_Blue-4c.svg";
	
	//afterBlue selected
	var blueAfterSelected = new Array();
	blueAfterSelected[1]="img/blue/Color-Lab_Blue-1b.svg";
	blueAfterSelected[2]="img/blue/Color-Lab_Blue-2b.svg";
	blueAfterSelected[3]="img/blue/Color-Lab_Blue-3b.svg";
	blueAfterSelected[4]="img/blue/Color-Lab_Blue-4b.svg";
	
	//indigo array
	var indigoSelected = new Array();
	indigoSelected[1]="img/indigo/Color-Lab_indigo-1c.svg";
	indigoSelected[2]="img/indigo/Color-Lab_indigo-2c.svg";
	indigoSelected[3]="img/indigo/Color-Lab_indigo-3c.svg";
	indigoSelected[4]="img/indigo/Color-Lab_indigo-5c.svg";
	
	//afterIndigo selected
	var indigoAfterSelected = new Array();
	indigoAfterSelected[1]="img/indigo/Color-Lab_indigo-1b.svg";
	indigoAfterSelected[2]="img/indigo/Color-Lab_indigo-2b.svg";
	indigoAfterSelected[3]="img/indigo/Color-Lab_indigo-3b.svg";
	indigoAfterSelected[4]="img/indigo/Color-Lab_indigo-4b.svg";
	
	//violet array
	var violetSelected = new Array();
	violetSelected[1]="img/violet/Color-Lab_Violet-1c.svg";
	violetSelected[2]="img/violet/Color-Lab_Violet-2c.svg";
	violetSelected[3]="img/violet/Color-Lab_Violet-3c.svg";
	violetSelected[4]="img/violet/Color-Lab_Violet-4c.svg";
	
	//afterViolet selected
	var violetAfterSelected = new Array();
	violetAfterSelected[1]="img/violet/Color-Lab_Violet-1b.svg";
	violetAfterSelected[2]="img/violet/Color-Lab_Violet-2b.svg";
	violetAfterSelected[3]="img/violet/Color-Lab_Violet-3b.svg";
	violetAfterSelected[4]="img/violet/Color-Lab_Violet-4b.svg";
	
	//white array
	var whiteSelected = new Array();
	whiteSelected[1]="img/white/Color-Lab_White-1c.svg";
	whiteSelected[2]="img/white/Color-Lab_White-2c.svg";
	whiteSelected[3]="img/white/Color-Lab_White-3c.svg";
	whiteSelected[4]="img/white/Color-Lab_White-4c.svg";
	
	//afterWhite selected
	var whiteAfterSelected = new Array();
	whiteAfterSelected[1]="img/white/Color-Lab_White-1b.svg";
	whiteAfterSelected[2]="img/white/Color-Lab_White-2b.svg";
	whiteAfterSelected[3]="img/white/Color-Lab_White-3b.svg";
	whiteAfterSelected[4]="img/white/Color-Lab_White-4b.svg";
	
	//black array
	var blackSelected = new Array();
	blackSelected[1]="img/black/Color-Lab_Black-1c.svg";
	blackSelected[2]="img/black/Color-Lab_Black-2c.svg";
	blackSelected[3]="img/black/Color-Lab_Black-3c.svg";
	blackSelected[4]="img/black/Color-Lab_Black-4c.svg";
	
	var blackAfterSelected = new Array();
	blackAfterSelected[1]="img/black/Color-Lab_Black-1b.svg";
	blackAfterSelected[2]="img/black/Color-Lab_Black-2b.svg";
	blackAfterSelected[3]="img/black/Color-Lab_Black-3b.svg";
	blackAfterSelected[4]="img/black/Color-Lab_Black-4b.svg";
	
	//brown array
	var brownSelected = new Array();
	brownSelected[1]="img/brown/Color-Lab_Brown-1c.svg";
	brownSelected[2]="img/brown/Color-Lab_Brown-2c.svg";
	brownSelected[3]="img/brown/Color-Lab_Brown-3c.svg";
	brownSelected[4]="img/brown/Color-Lab_Brown-4c.svg";
	
	var brownAfterSelected = new Array();
	brownAfterSelected[1]="img/brown/Color-Lab_Brown-1b.svg";
	brownAfterSelected[2]="img/brown/Color-Lab_Brown-2b.svg";
	brownAfterSelected[3]="img/brown/Color-Lab_Brown-3b.svg";
	brownAfterSelected[4]="img/brown/Color-Lab_Brown-4b.svg";
	
	$( ".slide-items" ).click(function() {
		
		var imageUrl = $(this).find("img");
		//alert($(this).attr("color-img"));
		var imageUrl = $(this).attr("color-img");
		var imageUrl2 = $(this).attr("color-img2");
		var playbackUrl = $(this).attr("audio-file");
		var playbackUrl2 = $(this).attr("audio-file2");
		
		storeObject.backGroundImage = imageUrl;
		storeObject.backGroundImage2 = imageUrl2;
		storeObject.playbackFile = playbackUrl;
		storeObject.playbackFile2 = playbackUrl2;
		
		$.mobile.changePage("#page3",{ transition: "slidedown"});
	});	
	

	$(document).on('pagebeforeshow', '#page3', function(){     
		//alert('transparent url(' + storeObject.backGroundImage + ') !important');
		var audio = new Audio(storeObject.playbackFile);
		audio.play();
		//alert("start playing");
		audio.addEventListener('ended', function() {
			//alert("long audio ended");
			$( "#page3" ).click(function() {
				$.mobile.changePage("#page4",{ transition: "slidedown"});
				$("#page3").unbind( "click" );
			});	
		}, true);
		$('#page3').css('background', 'url(' + storeObject.backGroundImage + ') no-repeat');
	});
	
	//$("body").css("line-height", "1.3");
	//click on color image page
	
	
	$(document).on('pagebeforeshow', '#page4', function(){     
		//alert('url(' + storeObject.backGroundImage2 + ') no-repeat');		
		var audio = new Audio(storeObject.playbackFile2);
		audio.play();
		audio.addEventListener('ended', function() {
			//alert("short audio ended");
			$( "#page4" ).click(function() {
				$.mobile.changePage("#page1",{ transition: "slidedown"});
				$("#page4").unbind( "click" );
			});	
		}, true);
		$('#page4').css('background', 'url(' + storeObject.backGroundImage2 + ') no-repeat scroll center center / 100% 100%  rgba(0, 0, 0, 0)');
	});
	
	
	
	$( ".share-lock" ).click(function() {		
		var firstChar = (Math.floor(Math.random()*9)+1).toString();
		var secondChar = (Math.floor(Math.random()*9)+1).toString();
		var thirdChar = (Math.floor(Math.random()*9)+1).toString();
		
		var randNum = firstChar+secondChar+thirdChar;
		
		$("#setNumber").val(randNum);
		$("#rand-nos").html(triConvert(randNum));
		$.mobile.changePage("#page5",{ transition: "slidedown"});
	});	
	
	$( "#back-home" ).click(function() {
		$("body").removeAttr( 'style' );
		$.mobile.changePage("#page1",{ transition: "slidedown"});
	});	
		
	// Store object
	var storeObject = {
		backGroundImage : '',
		playbackFile : '',
		backGroundImage2 : '',
		playbackFile2 : '',
	}
	
	
	$(".numpad-div").click(function() {		
		var curVal = $("#number").val();
		var matchNum = $("#setNumber").val();
		if($("#number").val().length<3)
			$("#number").val(curVal+$(this).attr("data-index"));
		
		if($("#number").val()==matchNum)
		{
			$("#number").val("");
			$("body").css("line-height", "0.3");
			$.mobile.changePage("#sharer",{ transition: "slidedown"});
		}
		if($("#number").val().length==3 && $("#number").val()!=matchNum)
		{
			$("#number").val("");
			$.mobile.changePage("#page1",{ transition: "slidedown"});	
		}
	});	
	//shaarer page coding starts	
	$("#sharer-img").click(function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.jellybeez.com','_system');
     });
     
     $("#website").click(function() {
		 window.open('http://www.jellybeez.com','_system');
	 });
	 
	 $("#twitter").click(function() {
		window.open('https://twitter.com/JellyBeezApps','_system');
	 });
	 
	 $("#facebook-like").click(function() {
		window.open('https://www.facebook.com/jellybeezapps','_system');
	 });
	 
	 
	 //orientation issues resolve
	$( window ).on( "orientationchange", function( event ) {
		//alert(event.orientation);
		if(event.orientation=="landscape")
		{			
			//alert("landscape");
			window.location.href = 'landscape.html';
		}
		else
		{
			window.location.href = 'index.html';
			//alert("portrait");
		}
	});
	
	//generating random numbers
	
	function triConvert(num){
		var ones = new Array('ZERO', ' Cresent', ' Heart', 'Clover', ' Cross', ' Star', ' Square', 'Oval', ' Triangle', 'Circle');
		//var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
		//var hundred = ' hundred';
		var output = '';
		var numString = num.toString();
		
		if (num == 0) {
			return 'dontAddBigSufix';
		}
		//the case of 10, 11, 12 ,13, .... 19 
		if (num < 20) {
			output = ones[num];
			return output;
		}

		//100 and more
		if (numString.length == 3) {
			output = ones[parseInt(numString.charAt(0))]+", ";
			output += ones[parseInt(numString.charAt(1))]+", ";
			output += ones[parseInt(numString.charAt(2))];
			return output;
		}

		output += ones[parseInt(numString.charAt(0))]+", ";
		output += ones[parseInt(numString.charAt(1))];

		return output;
	}
	//Play and how-to-play button
	$("#play-btn").click(function() {
		$.mobile.changePage("#page1",{ transition: "slidedown"});
	});
	/*$("#how-to-play-btn").click(function() {
		$.mobile.changePage("#page1",{ transition: "slidedown"});
	});*/
	$("#popupBasic").click(function(e){
		var winHeight=$(window).height();
		var winWidth=$(window).width();
	   var parentOffset = $(this).parent().offset(); 
	   //or $(this).offset(); if you really just want the current element's offset
	   var relX = e.pageX - parentOffset.left;
	   var relY = e.pageY - parentOffset.top;
	   var hlafWidth = winWidth/2;
		if(hlafWidth>relX)
		{
			$('.m-scooch').scooch('prev');
		}
		else
		{
			$('.m-scooch').scooch('next');
		}
	});
	//$(document).delegate('.ui-content', 'touchmove', false);​
});
