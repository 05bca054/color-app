$( document ).ready(function() {
	// Handler for .ready() called.
	
	var backaudio = new Audio("audio/Background Audio Files/Looping-Background-Music.wav");
	backaudio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	backaudio.play();
	
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
		$("img", this).effect("highlight", {color:"black"}, 2000);
		//$(this).effect("highlight", {color:"black"}, 2000);
		var curVal = $("#number").val();
		var matchNum = $("#setNumber").val();
		if($("#number").val().length<3)
			$("#number").val(curVal+$(this).attr("data-index23"));
		
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
		$(this).effect("highlight", {color:"black"}, 1200);
		setTimeout(function() {
			$.mobile.changePage("#page1",{ transition: "slidedown"});
		}, 1000 );
		

	});
	/*$("#how-to-play-btn").click(function() {
		$.mobile.changePage("#page1",{ transition: "slidedown"});
	});*/
	$("#popupBasic").click(function(e){
		$("#how-to-play-btn").effect("highlight", {color:"black"}, 2000);
		var winHeight=$(window).height();
		var winWidth=$(window).width();
	   var parentOffset = $(this).parent().offset(); 
	   //or $(this).offset(); if you really just want the current element's offset
	   var relX = e.pageX - parentOffset.left;
	   var relY = e.pageY - parentOffset.top;
	   var hlafWidth = winWidth/2;
		if(hlafWidth>relX)
		{
			$('.m-scooch23').scooch('prev');
		}
		else
		{
			$('.m-scooch23').scooch('next');
		}
	});
	//$(document).delegate('.ui-content', 'touchmove', false);​
});
