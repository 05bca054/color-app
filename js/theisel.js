$( document ).ready(function() {
	// Handler for .ready() called.
	var winHeight=$(window).height();
	var winWidth=$(window).width();
	
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
		preImg.css("width","7%");
		
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
		currentImg.css("width","20.5%");
		
		//alert(nextDataIndex);		
	});	
	
	//three level multi touching
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
		$('#page3').css('background', 'url(' + storeObject.backGroundImage + ') no-repeat');  
		//$('#page3').attr('next-img', storeObject.backGroundImage2);  
		//$('#page3').attr('next-audio', storeObject.playbackFile2);  
	});
	
	
	//click on color image page
	$( "#page3" ).click(function() {
		$.mobile.changePage("#page4",{ transition: "slidedown"});
	});	
	
	$(document).on('pagebeforeshow', '#page4', function(){     
		//alert('url(' + storeObject.backGroundImage2 + ') no-repeat');
		var audio = new Audio(storeObject.playbackFile2);
		audio.play();
		$('#page4').css('background', 'url(' + storeObject.backGroundImage2 + ') no-repeat scroll center center / cover  rgba(0, 0, 0, 0)');
		
		//$('#page3').attr('next-img', storeObject.backGroundImage2);  
		//$('#page3').attr('next-audio', storeObject.playbackFile2);  
	});
	
	$( "#page4" ).click(function() {
		$.mobile.changePage("#page1",{ transition: "slidedown"});
	});	
	
	$( ".share-lock" ).click(function() {
		$.mobile.changePage("#page5",{ transition: "slidedown"});
	});	
	
	$( "#back-home" ).click(function() {
		$.mobile.changePage("#page1",{ transition: "slidedown"});
	});	
		
		/*
		$("#page4").on("pagechange",function(event,data){alert("asdasd");})
		$(document).on('pagechange', '#page3', function(){
			alert("hello");
			$('#page4').css('min-height', '50%');
			alert("after");
		});*/
		/*
		$(document).on('pagechange ', '#page4' ,function(){
		// Code goes here
				alert("after asd");
		});
		*/
	// Store object
	var storeObject = {
		backGroundImage : '',
		playbackFile : '',
		backGroundImage2 : '',
		playbackFile2 : '',
	}
	
	
	$(".numpad-div").click(function() {		
		var curVal = $("#number").val();
		if($("#number").val().length<3)
			$("#number").val(curVal+$(this).attr("data-index"));
		//alert($("#number").val());
		if($("#number").val()=="626")
		{
			$.mobile.changePage("#sharer",{ transition: "slidedown"});
			$("#number").val("");
		}
		if($("#number").val().length==3 && $("#number").val()!="626")
		{
			$("#number").val("");
			$('#warning').show();
			$('#warning').delay(5000).fadeOut();
		}
	});	
	//shaarer page coding starts	
	$("#sharer-div").click(function() {
		//var title = encodeURIComponent('Jellybeez');
        //var summary = encodeURIComponent('JellyBeez doesn’t create anything inappropriate for any age. Our goal is to be kid safe for all ages.');
        //var url = encodeURIComponent('http://www.jellybeez.com/');
        //var image = encodeURIComponent('http://www.jellybeez.com/wp-content/uploads/2012/02/JellyBeez-Slider1.jpg');
		//alert('http://www.facebook.com/sharer.php?s=100&amp;p[title]=' + title + '&amp;p[summary]=' + summary + '&amp;p[url]=' + url + '&amp;p[images][0]=' + image);
		/* FB.init({
			//appId      : '24177975681352',//color apps
			appId      : '267304476783935',//virtue mart
			status     : true,
			xfbml      : true,
			version    : 'v2.0',
		  });
		
		
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=267304476783935&version=v2.0";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));*/
		//alert("https://www.facebook.com/dialog/feed?app_id=241779752681352&display=popup&caption="+title+"&link="+url+"&redirect_uri=https://developers.facebook.com/tools/explorer");
        window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.jellybeez.com','sharer','toolbar=0,status=0');
     });
     
     $("#website-div").click(function() {
		 window.open('http://www.jellybeez.com','jellybeez','toolbar=0,status=0');
	 });
	 
	 $("#twitter-div").click(function() {
		window.open('https://twitter.com/meadsblog','jellybeez','toolbar=0,status=0');
	 });
	 
	 $("#like-div").click(function() {
		window.open('https://www.facebook.com/meadsblog','jellybeez','toolbar=0,status=0');
	 });
});
