$(document).ready(function(){
	
	$.ajax({
		url : 'listing/preLoadData/autopostswitch',
		type : "POST",
		success : function(data) {
			
			var response = eval("(" + JSON.stringify(data)+ ")");
			var displayhtml = "";
			
			
			displayhtml = "<table class='table table-bordered'>" +
			"<thead>" +
			"<tr>" +
				"<th>COURT</th>" +
				"<th>AUTO POST SWITCH</th>" +
				"<th>COURT</th>" +
				"<th>AUTO POST SWITCH</th>" +
			"</tr>" +
			"</thead>" +
			"<tbody>";
    


			for (var j = 0; j < response[0].courts.length; j++) {
				
				if ((j + 1) % 2 == 0) {
					displayhtml += "<td  value='" + response[0].courts[j].court_no + "'>" + response[0].courts[j].room_no + "-" + response[0].courts[j].bench_desc +
		                    "(" + response[0].courts[j].court_no + ")</td><td><input type='checkbox' id='" + response[0].courts[j].court_no + "' class='data-bootstrap-switch' data-off-color='danger' data-on-color='success' value='" + response[0].courts[j].autopost + "' ></td> </tr>";
		        } else {
		        	displayhtml += "<tr> <td value='" + response[0].courts[j].court_no + "'>" + response[0].courts[j].room_no + "-" + response[0].courts[j].bench_desc +
		                    "(" + response[0].courts[j].court_no + ")</td><td><input type='checkbox' id='" + response[0].courts[j].court_no + "' class='data-bootstrap-switch' data-off-color='danger' data-on-color='success' value='" + response[0].courts[j].autopost + "' ></td>";
		        }
				
			}
			
			displayhtml +="</tbody>" +
						  "</table>";
			
			
			$(".card-body").html(displayhtml);
			
			$(".data-bootstrap-switch").each(function(){
				
				  var checked=false;
				  if( $(this).val()=="Y"){
					  checked=true;
				  }
		      	$(this).bootstrapSwitch('state',checked);
		    });
			
			
			$('.data-bootstrap-switch').on('switchChange.bootstrapSwitch', function (event, state) {
				  var court= $(this).prop("id");
				  var switchval="N";
				  if(state){
					  
					  switchval="Y";
				  }
				  $.ajax({
			            type: "POST",
			            url: 'listing/switchAutoPost',
			            data: ({
			               
	                        court:court,
	                        autopost: switchval
	                  
			            }),
			            success: function(data) {
			            	var response = eval("(" + JSON.stringify(data)+ ")");
			            	
			            	if(response.autopost==switchval){
			            		
			            		displaySwal("success","AutoPost Switch for "+court,"Successfully Set to "+state);
			            	}else{
			            		
			            		displaySwal("danger","AutoPost Switch for "+court,"Failed" );
			            		
			            		
			            		$(this).bootstrapSwitch('state', !state);
			            	}
			            	
			            }
			        })
				
			}); 
			
		}
	});
	

});