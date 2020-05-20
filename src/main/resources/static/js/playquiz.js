
$(document).ready(function(){
var points=0;	
var questions;
var currentquestion=0;
getQuestions("Y");
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
		currentquestion++;		
		setTimeout(function(){ 
			loadQuestion(currentquestion,"N");
			$("#questioncard").removeClass("bounceOutRight");
			$("#questioncard").addClass("bounceInLeft");
		 }, 500);
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceInLeft");
		}, 2000);
		
	})
	$("#prevquestion").click(function(){
		currentquestion--;
		$("#questioncard").addClass("bounceOutLeft");
		setTimeout(function(){ 
			loadQuestion(currentquestion,"Y");
			$("#questioncard").removeClass("bounceOutLeft");
			$("#questioncard").addClass("bounceInRight");
		 }, 500);
		setTimeout(function(){ 
			$("#questioncard").removeClass("bounceInRight");
		}, 2000);
	})
	
//	$(".options").click(
			var clickanswer = function(){
		
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
				}, 3000);
			}, 1000);
			points=0;
			
		}
		$(this).addClass("answered");
		$(".options").off('click');
		$.ajax({
		      type: 'POST',
		      url: "saveQuestions",
		      data:{
		    	  gameid:1,
		    	  questionid:questions[currentquestion].id,
		    	  answered: "Y"
		      },
		      success: function(resultData) {
		    	 // alert(resultData);
		    	  getQuestions("N");
		     }
		});
	}
//	)
	
	
	$(".info-box").click(function(){
		
		if(parseInt(points)>0){
			
			$("#nextquestion").show();
			$("#prevquestion").show();
			$(".assign").hide();
			$(".assign").removeClass("blink-text");
			var currentpoints=$(this).find('.info-box-number').html();
			var totalpoints= parseInt(points)+parseInt(currentpoints);
			animateValue($(this).find('.info-box-number'), parseInt(currentpoints), totalpoints, 1500)
			
			
			//alert($(this).find('.teamscore').prop("id")+"  "+$(this).find('.teamscore').html());
			
			$.ajax({
			      type: 'POST',
			      url: "savePoints",
			      data:{
			    	  gameid:1,
			    	  teamid:$(this).find('.teamscore').prop("id"),
			    	  questionid:questions[currentquestion].id,
			    	  option:$(".correct").prop("id"),
			    	  points:parseInt(points),
			    	  totalpoints:totalpoints
			      },
			      success: function(resultData) { 
//			    	  if(resultData=="Y")
//			    		  alert("SAVED");
//			    	  else
//			    		  alert("FAILED");
			     }
			});
			points=0;
		}else{
			
			erroraudio.play();
		}
		
		
	})
	

	
	
	function getQuestions(loadflag){
		$.ajax({
		      type: 'POST',
		      url: "getTeams",
		      data:{
		    	  gameid:1
		      },
		      dataType: "JSON",
		      success: function(resultData) { 
		    	  
		    	  for(var i=0;i<resultData.length;i++){
		    		  $(".main-footer").find('.info-box').eq(i).prop("id","box"+resultData[i].id);
		    	  }
		    	  for(var i=0;i<resultData.length;i++){
			    	  $("#box"+resultData[i].id).find('.teamscore').prop("id",resultData[i].id);
			    	  $("#box"+resultData[i].id).find('.teamscore').html(resultData[i].points);
			    	  $("#box"+resultData[i].id).find('.teamcode').html(resultData[i].teamcode);
		    	  }

		     }
		});

		$.ajax({
		      type: 'POST',
		      url: "getQuestions",
		      data:{
		    	  gameid:1
		      },
		      dataType: "JSON",
		      success: function(resultData) { 
		    	  
		    	  questions=resultData;
		    	  if(loadflag!='N')
		    		  loadQuestion(currentquestion,"N");
		     }
		});
	}
	
	function loadQuestion(currQues,back){
		
		
		$(".options").removeClass("answered");
		$(".correct").addClass("btn-outline-primary");
		$(".options").on('click',clickanswer);
		$(".options").removeClass("correct");
		
		if(currQues>(questions.length-1)){
			
			alert("All Questions Over");
			checkWinner();
			return;
		}
		
		if(questions[currQues].answered=='N'){
		$("#qno").html(questions[currQues].questionno);
		$("#question").html(questions[currQues].question);
		$("#questionpoints").val(questions[currQues].questionpoints);
		if(questions[currQues].questiontype=="P"){
			
			$("#questionimage").prop("src",questions[currQues].questionfile);
			$("#questionimage").css("display", "block");
		}else if(questions[currQues].questiontype=="V"){
			
		}else if(questions[currQues].questiontype=="A"){
			
		}else{
			
			$("#questionimage").hide();
		}
		
		for(var i=0;i<questions[currQues].choices.length;i++){
			
			//$("#option"+(i+1)).html(questions[currQues].choices[i].choice);
			$(".options").eq(i).html(questions[currQues].choices[i].choice);
			$(".options").eq(i).prop("id",questions[currQues].choices[i].id);
			if(questions[currQues].choices[i].iscorrect=="Y"){
				//$("#option"+(i+1)).addClass("correct");
				$(".options").eq(i).addClass("correct");
			}
			
		}
		}else{
			if(back=="N")
			currentquestion++;
			else
			currentquestion--;	
			
			loadQuestion(currentquestion,back);
		}
		
	}
	$(".options").on('click',clickanswer);
	
	function checkWinner(){
		var max = -Infinity;
	
		var maxEle = $(".teamscore").each(function() {
		    if (+this.innerHTML > max) max = +this.innerHTML;
		}).filter(function() {
		    return this.innerHTML == max;
		});
	
	
		if (maxEle.length > 1) maxEle = maxEle.eq(Math.floor(Math.random() * maxEle.length));
	
		maxEle.css("border-color", "yellow");
	}
})

