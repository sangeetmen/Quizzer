$(document).ready(function(){
	
	
		$.ajax({
			url : 'listing/preLoadData/printboard',
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
				
				
				displayhtml = "";
				for (var j = 0; j < response[0].causelistType.length; j++) {
					displayhtml += "<option value='"
							+ response[0].causelistType[j].cause_list_type_id + "'>"
							+ response[0].causelistType[j].cause_list_type
							+ "</option>";
				}
	
				$("#causelistType").html(displayhtml);
				
				
			}
		});
		
		
		
		$("#checkcauselist").click(function(){
			
			
			$.ajax({
				type : "POST",
				url : 'listing/causeListStatus',
				dataType : "json",
				data : ({
					listingdate : $(
							"#listingDate")
							.val(),
					court : $("#court")
							.val(),
					clistType : $(
							"#causelistType")
							.val()
				}),
				success : function(data) {

					var response = eval("(" + JSON.stringify(data)
							+ ")");
					
					var c_status;
					var status_class;
					var iconclass;
					if(response.length==0){
						
	                	c_status = "CAUSE LIST NOT AVAILABLE";
	                    status_class = "warning";
	                    iconclass="fa-exclamation-triangle"
	                	
	                }else{
	                	
					    if (response[0].cause_list_status=="A") {
		                    c_status = "NOT PREPARED";
		                    status_class = "warning";
		                    iconclass="fa-exclamation-triangle"
		                }
					    else if (response[0].cause_list_status=="P") {
		                    c_status = "PREPARED";
		                    status_class = "warning";
		                    iconclass="fa-exclamation-triangle"
		                }
					    else if (response[0].cause_list_status=="M") {
		                    c_status = "MODIFIED";
		                    status_class = "warning";
		                    iconclass="fa-exclamation-triangle"
		                }
					    
		                if (response[0].published=="Y") {
		                    c_status = "PUBLISHED";
		                    status_class = "success";
		                    iconclass="fa-ban"
		                }
		                $("#mcount_p").html(response[0].maincases);
						$("#icount_p").html(response[0].iacases);
						$("#wcount_p").html(response[0].connectedcases);
	                }
	                
					
					$("#statusheader").removeClass (function (index, className) {
					    return (className.match (/(^|\s)bg-\S+/g) || []).join(' ');
					});
					$("#statusheader").addClass("bg-"+status_class);
					$("#statusheader").find("i").addClass(iconclass);
					$("#statuscard").show();
					$("#causeliststatus").html(c_status);
					
					
					if(c_status!="PUBLISHED"){
						
						$("#generateCauseList").hide();
						//$("#printCauseList_Direct").show();
						
					}else{
						$("#generateCauseList").show();
						//$("#printCauseList_Direct").show();
						
					}
				}
			})
		})
		
		
		$('#printCauseList_Direct').click(function() {
			
			var bwflagstr="Y";
			var mmflagstr="Y";
			var ebookflagstr="N";
			$.ajax({
				type : "POST",
				url : 'listing/printCauseList',
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val(),
					clistType : $("#causelistType").val(),
					bwflag: bwflagstr,
					mmflag: mmflagstr,
					booklet:"N",
					ebook:ebookflagstr	
				}),
				 success: function(data) {
					 	$('#modal-printcauselist').modal('toggle');
					    window.location.href="listing/downloadCauseList?filename="+data;
					}
				});
										
		})
		
		$('#printCauseList').click(function() {
			
			var bwflagstr="N";
			var mmflagstr="N";
			var ebookflagstr="N";
			if($('#bwswitch').bootstrapSwitch('state')) bwflagstr="Y";
			if($('#mmswitch').bootstrapSwitch('state')) mmflagstr="Y";
			if($('#ebswitch').bootstrapSwitch('state')) ebookflagstr="Y";
			
			$.ajax({
				type : "POST",
				url : 'listing/printCauseList',
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val(),
					clistType : $("#causelistType").val(),
					bwflag: bwflagstr,
					mmflag: mmflagstr,
					booklet:"N",
					ebook:ebookflagstr	
				}),
				 success: function(data) {
					 	$('#modal-printcauselist').modal('hide');
					 	window.location.href="listing/downloadCauseList?filename="+data;
					}
				});
										
		});
		
		$('#rePrint').click(function() {
			
			$.ajax({
				type : "POST",
				url : 'listing/reprintCauseList',
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val()
					
				}),
				 success: function(data) {
					 	var response = eval("(" + JSON.stringify(data)+ ")");
					 	var displayhtml = "<table id='reprintclist_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
							+ "<thead>"
							+ "<tr>"
							+ "<th>SR NO</th>"
							+ "<th>COURT</th>"
							+ "<th>CORAM</th>"
							+ "<th>CAUSE LIST TYPE</th>"
							+ "<th>FILE TYPE</th>"
							+ "<th>DATE/TIME</th>"
							+ "<th>ACTIONS</th>"
							+ "</thead>"
							+ "<tbody>";
					 	for (var j = 0; j < response.length; j++) {
					 		
					 		displayhtml += "<tr><td>"+ (j + 1)+"</td>"
								+"<td>"+ response[j].court+"</td>"
								+"<td>"+response[j].coram+"</td>"
								+"<td>"+response[j].clisttype+"</td>"
								+"<td>"+response[j].filetype+"</td>"
								+"<td>"+response[j].modified+"</td>"
								+"<td><input type='radio' name='reprintradio' id='"+response[j].filelink+"' ></td></tr>";
					 		
					 	}
					 	
					 	displayhtml+="</tbody></table>";
					    $("#reprintgridDiv").html(displayhtml);
					 	$("#reprintclist_table").DataTable();
					 	$("#modal-reprintcauselist").modal("show");
					}
				});
										
		})
		
		$('#reprintCauseList').click(function() {
			var data = $('input:radio[name=reprintradio]:checked').attr('id');
			if(data!=null){
				var encoded=encodeURI(data).replace(/\\/g, '/')	;				 	
			    window.location.href="listing/downloadCauseList?filename="+encoded;
			}else{
				displaySwal("warning","Re-Print Cause List","Please Select at least one file for re-print");
			}
									
		})
		
		$('#generateCauseList').click(function() {
			
			$.ajax({
				type : "POST",
				url : 'listing/lastCauselistFile',
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val(),
					clisttype: $("#causelistType").val()
					
				}),
				 success: function(data) {
					 	var response = eval("(" + JSON.stringify(data)+ ")");
					 	var displayhtml=""; 
					 	var fileLink="";
					 	for (var j = 0; j < response.length; j++) {
					 		
					 		displayhtml += "Last File created at "+response[j].modified+". <button class='btn btn-primary bg-gradient-primary' id='downloadlastFile'>Downlaod Last File</button>";
					 		fileLink=response[j].filelink;
					 		
					 		
					 		
					 	}
					 	
					 	$("#lastFile").html("</br>"+displayhtml);
					 	$("#downloadlastFile").click(function(){
					 		var encoded=encodeURI(fileLink).replace(/\\/g, '/')	;				 	
						    window.location.href="listing/downloadCauseList?filename="+encoded;
				 		});
					}
				});
										
		})
		
		
		$('#generateDummyList').click(function() {
			
			$.ajax({
				type : "POST",
				url : 'listing/printCauseList',
				data : ({
					listingdate : $("#listingDate").val(),
					court : $("#court").val(),
					clistType : $("#causelistType").val(),
					bwflag: "Y",
					mmflag: "Y",
					booklet: "Y",
					ebook:"N"
				}),
				 success: function(data) {
					 	
					    window.location.href="listing/downloadCauseList?filename="+data;
					}
				});
										
		})
		
		
		
		$('#viewpostedcases')
							.click(
									function() {
										
										$
												.ajax({
													type : "POST",
													url : 'listing/postedcases',
													dataType : "json",
													data : ({
														listingdate : $(
																"#listingDate")
																.val(),
														court : $("#court")
																.val(),
														clistType : $(
																"#causelistType")
																.val()
													}),
													success : function(data) {

														var response = eval("("
																+ JSON
																		.stringify(data)
																+ ")");
														var displayhtml = "<table id='postedcases_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
																+ "<thead>"
																+ "<tr>"
																+ "<th>SR NO</th>"
																+ "<th>MAIN CASE DETAILS</th>"
																+ "<th>CONNECTED</th>"
																+ "<th>CASE DETAILS</th>"
																+ "<th>STAGE</th>"
																+ "<th>ACTIONS</th>"
																+ "</thead>"
																+ "<tbody>";

														var className = "gradeUL";
														var iacount = 0;
														var mcount = 0;
														var ccount = 0;

														for (var j = 0; j < response.length; j++) {
															if (response[j].ia_no != null) {
																iacount++;
																className = "gradeXL";
															} else {
																mcount++;
																className = "gradeUL";
															}

															displayhtml += "<tr class='"
																	+ className
																	+ "'>";
															displayhtml += "<td>"
																	+ (j + 1)
																	+ "<input type='hidden' value='"
																	+ response[j].cino
																	+ "'></td>"
																	+ "<td value='"
																	+ response[j].cino
																	+ "' >-<input type='hidden' value='"
																	+ response[j].cino
																	+ "'></td>"
																	+ "<td></td>";
															if (response[j].ia_no != null) {
																displayhtml += "<td value='"
																		+ response[j].ia_no
																		+ "'>"
																		+ response[j].casedetails
																		+ "</td>"
															} else {
																displayhtml += "<td value='"
																		+ response[j].cino
																		+ "'>"
																		+ response[j].casedetails
																		+ "</td>";
															}
															displayhtml += "<td value='"
																	+ response[j].purposecode
																	+ "' >"
																	+ response[j].purposename
																	+ "</td>"
																	+ "<td><button class='removeCase btn btn-block bg-gradient-secondary  btn-sm' >Remove Case</button> <button class='modifyPostPurpose btn btn-block bg-gradient-secondary  btn-sm' >Change Purpose</button> </td>"
																	+ "</tr>"
															if (response[j].connectedcases.length > 0) {
																for (var i = 0; i < response[j].connectedcases.length; i++) {
																	displayhtml += "<tr class='gradeAL'>"
																			+ "<td>"
																			+ (j + 1)
																			+ "<input type='hidden' value='"
																			+ response[j].connectedcases[i].cino
																			+ "'></td>"
																			+ "<td value='"
																			+ response[j].cino
																			+ "'>"
																			+ response[j].casedetails
																			+ "<input type='hidden' value='"
																			+ response[j].cino
																			+ "'></td>"
																			+ "<td>WITH</td>"
																			+ "<td value='"
																			+ response[j].connectedcases[i].cino
																			+ "' >"
																			+ response[j].connectedcases[i].casedetails
																			+ "</td>"
																			+ "<td value='"
																			+ response[j].connectedcases[i].purposecode
																			+ "'>"
																			+ response[j].connectedcases[i].purposename
																			+ "</td>"
																			+ "<td></td>"
																			+ "</tr>"
																	ccount++;
																}
															}

														}

														displayhtml += "</tbody></table>";

														$("#postedcasesdiv")
																.html(
																		displayhtml);
														$("#postedcases_table")
																.DataTable();

													}
												})

									});
		
		
		
		
		
		$('.select2').select2({			
			selectOnClose: true
		});

		
		$('#listingDate').daterangepicker({
			singleDatePicker : true,
			"locale" : {
				"format" : "DD/MM/YYYY"
			}						
		});
		
		
		$('#listingDate,#court,#causelistType').change(function () {
			$("#statuscard").hide();
			$("#generateCauseList").hide();
			$("#postedcasesdiv").html("");
		});
			 
		
	    $("#mmswitch").bootstrapSwitch();
	    $("#bwswitch").bootstrapSwitch();
	    $("#ebswitch").bootstrapSwitch();
	    
	    $("#modal-printcauselist").on('shown.bs.modal', function(){
	    	
	    	 $("#mmswitch").bootstrapSwitch('state',true);
	    	 $("#bwswitch").bootstrapSwitch('state',true);
	    	 
	    	});
	   
	    
});