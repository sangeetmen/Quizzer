$(document).ready(function(){
	
	
		$.ajax({
			url : 'listing/preLoadData/autopostreport',
			type : "POST",
			success : function(data) {
				
				var response = eval("(" + JSON.stringify(data)+ ")");
				var displayhtml = "";
				
				$("#listingDate").val(response[0].nextworking);
				
				
				displayhtml = "";
				for (var j = 0; j < response[0].courts.length; j++) {
					displayhtml += "<option value='"
							+ response[0].courts[j].court_no + "'>"
							+ response[0].courts[j].room_no + "-"
							+ response[0].courts[j].bench_desc + "("
							+ response[0].courts[j].court_no + ")</option>";
				}
				$("#court").html(displayhtml);
				
				
				
			}
		});
		
		
		
$("#viewReport").click(function(){
			
			$.ajax({
				type : "POST",
				url : 'listing/autoPostedCases',
				dataType : "json",
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val(),
					clistType : '1001'
				}),
				success : function(data) {

					var response = eval("(" + JSON.stringify(data)+ ")");
					
					var displayhtml = "<table id='autoposted_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
						+ "<thead>"
						+ "<tr>"
						+ "<th>SR NO</th>"
						+ "<th>CASE DETAILS</th>"
						+ "<th>STAGE</th>"
						+ "<th>LAST LIST</th>"
						+ "<th>AUTO POST MODE</th>"
						+ "<th>AUTO POST TIME</th>"
						+ "</thead>"
						+ "<tbody>";

				var className = "gradeUL";
				var autopostmode="MAIN CASE";
				var iacount = 0;
				var mcount = 0;
				var ccount = 0;
				var withstr= "";
				var totalcount=0;
				for (var j = 0; j < response.length; j++) {
					if(response[j].linkcode=="M" && response[j].ia_no == null){
						mcount++;
						className = "gradeUL";
						autopostmode="MAIN CASE";
						withstr="";
						totalcount++;
						
					}
					else if (response[j].ia_no != null ) {
						iacount++;
						className = "gradeXL";
						autopostmode="IA MAIN CASE";
						withstr="";
						totalcount++;
					}
					

					
					displayhtml += "<tr class='"+ className+ "'>";

					if(withstr.length==0)
						displayhtml += "<td>"+ totalcount +"</td>"
				    else
				    	displayhtml += "<td></td>"
					displayhtml += "<td>"+ withstr + response[j].casedetails+ "</td>"
					displayhtml += "<td >"+ response[j].purposename+ "</td>"
					displayhtml += "<td >"+ response[j].lastlistdate+ "</td>"
					displayhtml += "<td >"+ autopostmode+ "</td>"
					displayhtml += "<td >"+ response[j].create_modify+ "</td>"
					displayhtml += "</tr>";
					
					for (var i = 0; i < response[j].connectedcases.length; i++) {
							
							
							ccount++;
							className="gradeAL";
							autopostmode="CONNECTED CASE";
							withstr="With<br>"
							
						
							displayhtml += "<tr class='"+ className+ "'>";
							displayhtml += "<td></td>"
							displayhtml += "<td>"+ withstr + response[j].connectedcases[i].casedetails+ "</td>"
							displayhtml += "<td >"+ response[j].connectedcases[i].purposename+ "</td>"
							displayhtml += "<td >"+ response[j].connectedcases[i].lastlistdate+ "</td>"
							displayhtml += "<td >"+ autopostmode+ "</td>"
							displayhtml += "<td >"+ response[j].create_modify+ "</td>"
							displayhtml += "</tr>";
					}

				}

				displayhtml += "</tbody></table>";

				$("#autopostedDiv").html(displayhtml);
				$("#autoposted_table").DataTable({
					
					"bSort" : false
				});
				
				$("#printBoard").show();
				}
			})
			
		})
		
		$('.select2').select2();

		$('#listingDate').daterangepicker({
			singleDatePicker : true,
			"locale" : {
				"format" : "DD/MM/YYYY"
			}						
		});
		
});