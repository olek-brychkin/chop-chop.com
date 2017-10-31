$(document).ready(function() {
	
	$('#menuH').hover(function() { 
			$('#menuH a').css('color','#e5e5e5');
			$('#menu_shape_H').css('display','block');
	},function(){ 
		$('#menuH a').css('color','black');
		$('#menu_shape_H').css('display','none');
	});

	$('#menuP').hover(function() { 
			$('#menuP a').css('color','#e5e5e5');
			$('#menu_shape_P').css('display','block');
	},function(){ 
		$('#menuP a').css('color','black');
		$('#menu_shape_P').css('display','none');
	});

	$('#menuA').hover(function() { 
			$('#menuA a').css('color','#e5e5e5');
			$('#menu_shape_A').css('display','block');
	},function(){ 
		$('#menuA a').css('color','black');
		$('#menu_shape_A').css('display','none');
	});

	$('#menuC').hover(function() { 
			$('#menuC a').css('color','#e5e5e5');
			$('#menu_shape_C').css('display','block');
	},function(){ 
		$('#menuC a').css('color','black');
		$('#menu_shape_C').css('display','none');
	});

	$('#btn').mousedown( function() {
		$(this).css('box-shadow','inset 0 3px 5px #21b3ac');
		});

	$('#btn').mouseup( function() {
		$(this).css('box-shadow','inset 0 -5px 0 0 #21b3ac');
		});

	$('#btn3').mousedown( function() {
		$(this).css('box-shadow','inset 0 6px 0 0 #555555');
		$(this).css('padding-top','5px');
		});

	$('#btn3').mouseup( function() {
		$(this).css('box-shadow','inset 0 3px 0 0 #555555');
		$(this).css('padding-top','0');
		});

	$("#btn3").click(function() {
    	$('html, body').animate({
        scrollTop: $("#Top").offset().top
    }, 2000);
	});

	$('#rm1,#rm2,#rm3').hover(function() { 
			$(this).css('color','#2de8df');
	},function(){ 
		$(this).css('color','#bdbdbd');
	});

	$('#rmm').hover(function() { 
			$(this).css('color','#2de8df');
	},function(){ 
		$(this).css('color','#bdbdbd');
	});

	$('.blog_T3').hide();

	var flag = 0;
	$('#rm1').click(function () {
		if (flag == 0) {
			$('#content').animate({height:'570px'}, 2000);
			$('#b_1_T').toggle(2000);
			flag = 1;
		}
		else if (flag == 1) {
			$('#b_1_T').toggle(2000);
			$('#content').animate({height:'440px'}, 2000);
			flag = 0;
		}
	});

	var flag = 0;
	$('#rm2').click(function () {
		if (flag == 0) {
			$('#content').animate({height:'570px'}, 2000);
			$('#b_2_T').toggle(2000);
			flag = 1;
		}
		else if (flag == 1) {
			$('#b_2_T').toggle(2000);
			$('#content').animate({height:'440px'}, 2000);
			flag = 0;
		}
	});

	var flag = 0;
	$('#rm3').click(function () {
		if (flag == 0) {
			$('#content').animate({height:'570px'}, 2000);
			$('#b_3_T').toggle(2000);
			flag = 1;
		}
		else if (flag == 1) {
			$('#b_3_T').toggle(2000);
			$('#content').animate({height:'440px'}, 2000);
			flag = 0;
		}



	});

	$('.blog_T1,.blog_T2,.blog_T3').each(function() {

   		var text = $(this).html();
   		$(this).html(text.replace('ipsum', '<span>ipsum</span>')); 

	});

	function light(){
		$('span').css('color','black');
	}

	$('#btn').click( function () {
	$('span').css('color','red');
	setTimeout(light,3000);	
	});

	
	
		

	
	


}); //Конец ready;

/*
var ourText = $('.blog_T1,.blog_T2,.blog_T3').text();
		var regE = /ipsum/;
		var resultText = ourText.text(text.replace('regE', '<span>ipsum</span>')); 
		console.log(resultText); 
	*/
