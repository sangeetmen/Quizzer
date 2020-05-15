/**
 * 
 */

$(document)
		.ready(
				function() {
					
					$.ajax({
						url : 'listing/preLoadData/postcases',
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
							
							
							displayhtml = "";
							for (var j = 0; j < response[0].casetypes.length; j++) {
								displayhtml += "<option value='"
										+ response[0].casetypes[j].caseType + "'>"
										+ response[0].casetypes[j].typeName+"-"+response[0].casetypes[j].fullForm
										+ "</option>";
							}

							$("#caseType_search").html(displayhtml);
							
							
							
							displayhtml = "";
							for (var j = 0; j < response[0].boardorder.length; j++) {
								displayhtml += "<option value='"
										+ response[0].boardorder[j].idno + "'>"
										+ response[0].boardorder[j].idno+"-"+response[0].boardorder[j].description
										+ "</option>";
							}

							$("#prepareType").html(displayhtml);
							
						}
					});
					

					

					
					
					$("#checkcauselist").click(function(){
						$("#statuscard").hide();
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
				                    status_class = "light";
				                    iconclass="fa-bullhorn"
				                	
				                }else{
				                	
								    if (response[0].cause_list_status=="A") {
					                    c_status = "NOT PREPARED";
					                    status_class = "info";
					                    iconclass="fa-info"
					                }
								    else if (response[0].cause_list_status=="P") {
					                    c_status = "PREPARED";
					                    status_class = "sucess";
					                    iconclass="fa-check"
					                }
								    else if (response[0].cause_list_status=="M") {
					                    c_status = "MODIFIED";
					                    status_class = "warning";
					                    iconclass="fa-exclamation-triangle"
					                }
								    
					                if (response[0].published=="Y") {
					                    c_status = "PUBLISHED";
					                    status_class = "danger";
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
							}
						})
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
					
					
					
					$('#searchCases')
					.click(
							function() {
								$
										.ajax({
											type : "POST",
											url : 'listing/getSearchCases',
											dataType : "json",
											data : ({
												listingdate : $(
														"#listingDate")
														.val(),
												court : $("#court_search")
														.val(),
												clistType : $(
														"#causelistType_search")
														.val(),
												searchType: $("#searchtype").val(),
												caseDetails : ""
											}),
											success : function(data) {

												var response = eval("("
														+ JSON
																.stringify(data)
														+ ")");
												var displayhtml = "<table id='searchcases_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
														+ "<thead>"
														+ "<tr>"
														+ "<th>SR NO</th>"
														+ "<th>MAIN CASE DETAILS</th>"
														+ "<th>CONNECTED</th>"
														+ "<th>CASE DETAILS</th>"
														+ "<th>CASE TITLE</th>"
														+ "<th>STAGE</th>"
														+ "<th>ACTIONS</th>"
														+ "<th>"
														+ "<div class='icheck-primary d-inline'>" 
														+ " <input type='checkbox' class='postcasescheckbox' id='postcasescheckbox'>" 
														+ "  <label for='postcasescheckbox'>"
														+ "  </label>" 
													    + "</div>" 
														+ "</th>"
														+ "<th>REMARKS/IA CASES</th>"
														+ "</thead>"
														+ "<tbody>";

														
												var iacount = 0;
												var mcount = 0;
												var ccount = 0;
												var brsrno= 1;
												 
												for (var j = 0; j < response.length; j++) {
												if (response[j].linkcode == "M") {
														
													
													  if (response[j].nb4check == "Y") {
														  displayhtml +="<tr class='gradeE' >";
							                               nb4count++;
							                            } else {
							                            	displayhtml +="<tr>";
							                            }
													
													displayhtml +="<td>" + brsrno + "</td>";
													displayhtml += "<td value='" +  response[j].parentccin + "'>" + response[j].parentcasedetails + "</td>";
													displayhtml += "<td></td>";
													displayhtml += "<td value='" + response[j].cino+ "'>" + response[j].casedetails + "</td>";
													displayhtml += " <td>" + response[j].casetitle + "</td>";
													displayhtml += "<td value='" + response[j].purpose_code+ "' >" + response[j].purposename + "</td>";
													displayhtml += "<td><button class='btn btn-block bg-gradient-secondary  btn-sm stagechange'>Change Purpose</button></td>";
													displayhtml += "<td><div class='icheck-primary d-inline'>" 
														+ " <input type='checkbox' class='postcasescheckbox' id='postcasescheckbox"+j+"'>" 
														+ "  <label for='postcasescheckbox"+j+"'>"
														+ "  </label>" 
													    + "</div></td>";
													displayhtml += "<td>" + response[j].ia_count+ " IAs </td>";
													displayhtml += "</tr>";
													
													mcount++;
													
													} else {
														if (response[j].nb4check == "Y") {
															  displayhtml +="<tr class='gradeE' >";
								                               nb4count++;
								                            } else {
								                              displayhtml +="<tr class='gradeA' >";
								                            }
														
														
														displayhtml +="<td>" + brsrno + "</td>";
														displayhtml += "<td value='" +  response[j].parentccin + "'>" + response[j].parentcasedetails + "</td>";
														displayhtml += "<td>WITH</td>" ;
														displayhtml += "<td value='" + response[j].cino+ "'>" + response[j].casedetails + "</td>";
														displayhtml += " <td>" + response[j].casetitle + "</td>";
														displayhtml += "<td value='" + response[j].purpose_code+ "' >" + response[j].purposename + "</td>";
														displayhtml += "<td  >&nbsp;</td>";
														displayhtml += "<td><div class='icheck-primary d-inline'>" 
															+ " <input type='checkbox' class='postcasescheckbox' id='postcasescheckbox"+j+"'>" 
															+ "  <label for='postcasescheckbox"+j+"'>"
															+ "  </label>" 
														    + "</div></td>";
							                            displayhtml += "<td>" + response[j].ia_count+ " IAs </td>";
							                            displayhtml += "</tr>";
							                            
							                            ccount++; 
							                            
													}

													
													brsrno++;

												}

												displayhtml += "</tbody></table>";

												$("#searchCasesDiv").html(displayhtml);
												$("#searchcases_table").DataTable({
											        "ordering": false
											        
											    });

											}
										})

							});
					
					
					
										
					$("#addCases").click(function(){
						
						if ($("#causeliststatus").html() == "PUBLISHED") {
				            $("#postcasesDiv").hide();
				            alert("CAUSE LIST PUBLISHED ! CANNOT BE ALTERED!!");

				        } else {
							$("#postCasesCard").show();
							$('#postcasesCard [data-card-widget="collapse"]').CardWidget('expand');
							$('#SearchCauseListCard [data-card-widget="collapse"]').CardWidget('collapse');
				        }
						
					})
					
					
					
					////////// INITITIALIZATIONS //////////
					
					$('.select2').select2();

					$('#listingDate').daterangepicker({
						singleDatePicker : true,
						"locale" : {
							"format" : "DD/MM/YYYY"
						}						
					});
					
					
					$('#postcasesCard [data-card-widget="collapse"]').CardWidget('collapse');
					$("#postCasesCard").hide();
					
					
					////////// INITITIALIZATIONS //////////					
					

				});


