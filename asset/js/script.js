$(document).ready(function(){

	/* 네비 숨기고 나타나기 */
	var windowWidth = $( window ).width();
		if(windowWidth <= 1600) {
		   
			$(".button").css("display","block");
		}
	var windowWidth = $( window ).width();
		if(windowWidth <= 1600) {
		   
			$("#nav").animate({left:'-250px'},0);
		   
		} else {
			$("#nav").animate({left:'0px'},0);
		};
		var slide = 0
	$(".button").click(function(){
		
		slide++
		console.log(slide)
		if(slide%2==1){
		$(".button").attr("src","asset/images/button2.png")
        $("#nav").stop().animate({left:0},300,'swing');}else{
		$(".button").attr("src","asset/images/button.png")
		$("#nav").stop().animate({left:-210},300,'swing');

		}
	});

	var sHeight = $(document).scrollTop();
	var mainheight = $("#title").outerHeight();
	
	if(sHeight<mainheight){
		$("#nav ,#hWrapper").fadeOut(300);
		
	}
	if(sHeight>mainheight){
		$("#nav ,#hWrapper").fadeIn(300);
	}
	
	var height = ($(window).height())-75;
	
	var height2 = height/7;

	var height3 = height2/4;
					   
					 
	$("#nav>p>a").css("height",height2);
	$(".font1").css("line-height",height2 + 'px');
	$(".font2").css("padding-top",height3 + 'px');

	console.log("height2:",height2);
	

	$(window).scroll(function(){
		/*스크롤 자리 찾기 */
		var intro = $("header").outerHeight();
		var c1_height  = $('#c1').outerHeight();
    	var	c2_height  = $('#c2').outerHeight();
		var	c3_height  = $('#c3').outerHeight();
		var	c4_height  = $('#c4').outerHeight();
		var	c5_height  = $('#c5').outerHeight();
		var	c6_height  = $('#subimg3').outerHeight();
		var scroll_top = $(window).scrollTop();

		var c2 = intro + c1_height;
		var c3 = intro + c1_height + c2_height;
		var c4 = intro + c1_height + c2_height + c3_height;
		var c5 = intro + c1_height + c2_height + c3_height + c4_height;
		var c6 = intro + c1_height + c2_height + c3_height + c4_height + c5_height;
		var c7 = intro + c1_height + c2_height + c3_height + c4_height + c5_height + c6_height;
		console.log(scroll_top);

		if (scroll_top +10 <= intro || scroll_top>c2){
			$(".c1").css("color","white");
			$(".c1").css("background-color","#5f5d51")
		}else{
			$(".c1").css("color","#ecca8e");
			$(".c1").css("background-color","#464436")
		}
		if (scroll_top <= c2 || scroll_top>c3){
			$(".c2").css("color","white");
			$(".c2").css("background-color","#5f5d51")
		}else{
			$(".c2").css("color","#ecca8e");
			$(".c2").css("background-color","#464436")
		}
		if (scroll_top <= c3 || scroll_top>c4){
			$(".c3").css("color","white");
			$(".c3").css("background-color","#5f5d51")
		}else{
			$(".c3").css("color","#ecca8e");
			$(".c3").css("background-color","#464436")
		}
		if (scroll_top <= c4 || scroll_top>c5){
			$(".c4").css("color","white");
			$(".c4").css("background-color","#5f5d51")
		}else{
			$(".c4").css("color","#ecca8e");
			$(".c4").css("background-color","#464436")
		}
		if (scroll_top <= c5 || scroll_top>c6){
			$(".c5").css("color","white");
			$(".c5").css("background-color","#5f5d51")
		}else{
			$(".c5").css("color","#ecca8e");
			$(".c5").css("background-color","#464436")
		}
		if (scroll_top <= c6 || scroll_top>c7){
			$(".c6").css("color","white");
			$(".c6").css("background-color","#5f5d51")
		}else{
			$(".c6").css("color","#ecca8e");
			$(".c6").css("background-color","#464436")
		}
		if (scroll_top <= c7){
			$(".c7").css("color","white");
			$(".c7").css("background-color","#5f5d51")
		}else{
			$(".c7").css("color","#ecca8e");
			$(".c7").css("background-color","#464436")
		}

		/*스틱키 스크롤? 메인만
		if (scroll_top <= intro){
			var offset = $(".c1").offset();
			$("html, body").stop().animate({scrollTop: offset.top},400);
		}*/
		/*스크롤 애니메이션 */
		var sHeight = $(document).scrollTop();
		var mainheight = $("#title").outerHeight();
		if(sHeight<mainheight){
			$("#nav ,#hWrapper").fadeOut(300);
			
		}
		if(sHeight>mainheight){
			$("#nav ,#hWrapper").fadeIn(300);
		}
		if(sHeight<mainheight){
			$(".container").fadeIn(300);
			
		}
		if(sHeight>mainheight){
			$(".container").fadeOut(300);
		}
			
	});

	$(window).on('resize', function(){
		
		clearTimeout(100);
		timer = setTimeout(function(){
			var height = ($(window).height())-75;
	
			var height2 = height/7;
		
			var height3 = height2/4;
							   
							 
			$("#nav>p>a").css("height",height2);
			$(".font1").css("line-height",height2 + 'px');
			$(".font2").css("padding-top",height3 + 'px');
			
		/* 네비 숨기고 나타나기 */	
		var windowWidth = $( window ).width();
		if(windowWidth <= 1600) {
			
			$("#nav").animate({left:'-210px'},300);
			$(".button").fadeIn(300);
			
		} else {
			$("#nav").animate({left:'0px'},300);
			$(".button").fadeOut(300);
		};
		console.log(windowWidth);
		}, 100);
		
		
	});
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 700);
			event.preventDefault();
		});
	});
});
