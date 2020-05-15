/**
 * 
 */
$(document).ready(function(){
	
	
		$.ajax({
			url : 'listing/preLoadData/dailycauselist',
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
				$("#court_search").html(displayhtml);
				
				displayhtml = "";
				for (var j = 0; j < response[0].causelistType.length; j++) {
					displayhtml += "<option value='"
							+ response[0].causelistType[j].cause_list_type_id + "'>"
							+ response[0].causelistType[j].cause_list_type
							+ "</option>";
				}
	
				$("#causelistType").html(displayhtml);
				$("#causelistType_search").html(displayhtml);
				
				
				
				
			}
		});
		
		$("#finalizeCauseList").click(function(){
			
			if(confirm("Are You Sure?")){
				
				$.ajax({
					type : "POST",
					url : 'listing/addCauselistStatus',
					dataType : "json",
					data : ({
						clistDate : $("#listingDate").val()
						
					}),
					success : function(data) {
	
						var response = eval("(" + JSON.stringify(data)+ ")");
						
						if(response.clistDate!=null){
							
							var clistdate = response.clistDate.substring(0,10).split("-").reverse().join('/');
							displaySwal("success","Listing Module -> Cause List Generation","Cause List Finalized for "+clistdate+". ");
							
						}
						else
							displaySwal("error","Listing Module -> Cause List Generation","Cause List Not Finalized for "+clistdate+". ");
						
					}
				})
			}
			
		})
		
		
		$("#checkcauselist").click(function(){
			
			$.ajax({
				type : "POST",
				url : 'listing/checkCauseList',
				dataType : "json",
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val(),
					clistType : $("#causelistType").val()
				}),
				success : function(data) {

					var response = eval("(" + JSON.stringify(data)+ ")");
					
					var displayhtml = "<table id='checklist_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
						+ "<thead>"
						+ "<tr>"
						+ "<th>SR NO</th>"
						+ "<th>MAIN CASE DETAILS</th>"
						+ "<th>DISTRICT</th>"
						+ "<th>STAGE</th>"
						+ "<th>CASE TITLE</th>"
						+ "<th>REMARKS</th>"
						+ "</thead>"
						+ "<tbody>";

				var className = "gradeUL";
				var iacount = 0;
				var mcount = 0;
				var ccount = 0;
				var withstr= "";
				for (var j = 0; j < response.length; j++) {
					if(response[j].blevel=="0" && response[j].ia_no == null){
						mcount++;
						className = "gradeUL";
						withstr="";
						
					}
					else if (response[j].ia_no != null && response[j].blevel=="0") {
						iacount++;
						className = "gradeXL";
						withstr="";
					}
					else {
						ccount++;
						className="gradeAL";
						withstr="With<br>"
					}

					displayhtml += "<tr class='"+ className+ "'>";

					if(withstr.length==0)
				    displayhtml += "<td>"+ response[j].srno +"</td>"
				    else
				    	displayhtml += "<td></td>"
					displayhtml += "<td>"+ withstr + response[j].casedetails+ "</td>"
					displayhtml += "<td >"+ response[j].district+ "</td>"
					displayhtml += "<td >"+ response[j].stagename+ "</td>"
					displayhtml += "<td >"+ response[j].casetitle+ "</td>"
					displayhtml += "<td >"+ response[j].remarks.split("###")[0]+ "</td>"
					

				}

				displayhtml += "</tbody></table>";

				$("#checklistdiv").html(displayhtml);
				$("#checklist_table").DataTable({
					
					"bSort" : false
				});
				
				$("#printBoard").show();
				}
			})
			
		})
		
		////////// INITITIALIZATIONS //////////
					
		$('.select2').select2();

		$('#listingDate').daterangepicker({
			singleDatePicker : true,
			"locale" : {
				"format" : "DD/MM/YYYY"
			}						
		});
		
		$("#printBoard").hide();
		
		
		
		
		
		////////// INITITIALIZATIONS //////////	
					
})