
$(document).ready(function(){
var points=0;	
	var wrongaudio = document.getElementById("wrongAudio");
	var erroraudio = document.getElementById("errorAudio");	
	var correctaudio = document.getElementById("correctAudio");
	$(".assign").hide();
	$("#nextquestion").click(function(){
//		$('#roundModal').modal('show')
//		$("#roundModal").addClass("bounceInLeft");
//		setTimeout(function(){ 
//			$("#roundModal").removeClass("bounceInLeft");
//			$("#roundModal").removeClass("bounceOutRight");
//		}, 3000);
		
		$("#questioncard").addClass("bounceOutRight");
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceOutRight");
			$("#questioncard").addClass("bounceInLeft");
		 }, 500);
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceInLeft");
		}, 2000);
		
	})
	$("#prevquestion").click(function(){
		
		$("#questioncard").addClass("bounceOutLeft");
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceOutLeft");
			$("#questioncard").addClass("bounceInRight");
		 }, 500);
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceInRight");
		}, 2000);
	})
	
	$(".options").click(function(){
		
		if($(this).hasClass("correct")){
			 
			correctaudio.play();
			setTimeout(function(){ 
				$(".correct").removeClass("blink-bg");
				$(".correct").addClass("answered");
				$(".correct").removeClass("btn-outline-primary");
			}, 2000);
			
			points=parseInt($("#questionpoints").val());
			$("#nextquestion").hide();
			$("#prevquestion").hide();
			$(".assign").show();
			$(".assign").addClass("blink-text");
			
		}else{
			
			 
			wrongaudio.play();
			setTimeout(function(){ 
				$(".correct").addClass("blink-bg");
				setTimeout(function(){ 
					$(".correct").removeClass("blink-bg");
					$(".correct").addClass("answered");
				}, 4000);
			}, 2000);
			points=0;
			
		}
		$(this).addClass("answered");
		$(".options").off('click');
		
	})
	
	
	$(".info-box").click(function(){
		
		if(parseInt(points)!=0){
			
			$("#nextquestion").show();
			$("#prevquestion").show();
			$(".assign").hide();
			$(".assign").removeClass("blink-text");
			var currentpoints=$(this).find('.info-box-number').html();
			var totalpoints= parseInt(points)+parseInt(currentpoints);
			animateValue($(this).find('.info-box-number'), parseInt(currentpoints), totalpoints, 1500)
			points=0;
		}else{
			
			erroraudio.play();
		}
		
		
	})
	
	
	
})