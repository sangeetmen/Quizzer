$(document).ready(function(){
	
	$("#nextquestion").click(function(){
		
		
		$("#questioncard").addClass("bounceOutRight");
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceOutRight");
			$("#questioncard").addClass("bounceInLeft");
		 }, 500);
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceInLeft");
		}, 500);
		
	})
	$("#prevquestion").click(function(){
		
		$("#questioncard").addClass("bounceOutLeft");
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceOutLeft");
			$("#questioncard").addClass("bounceInRight");
		 }, 500);
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceInRight");
		}, 500);
	})
	
	
})