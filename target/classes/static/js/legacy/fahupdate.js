$(document).ready(
		function() {

			$.ajax({
				url : 'legacy/preLoadData/fahupdate',
				type : "POST",

				success : function(data) {

					var response = eval("(" + JSON.stringify(data) + ")");
					var displayhtml = "";

					displayhtml = "";
					for (var j = 0; j < response[0].casetypes.length; j++) {
						displayhtml += "<option value='"
								+ response[0].casetypes[j].caseType + "'>"
								+ response[0].casetypes[j].typeName + "-"
								+ response[0].casetypes[j].fullForm
								+ "</option>";
					}

					$("#caseType_search").html(displayhtml);

					displayhtml = "";
					for (var j = 0; j < response[0].judges.length; j++) {
						displayhtml += "<option value='"
								+ response[0].judges[j].judgeCode + "'>"
								+ response[0].judges[j].judgeName + "-"
								+ response[0].judges[j].shortJudgeName
								+ "</option>";
					}

					$("#judges_search").html(displayhtml);

				}
			});
			
			
			
			$('#submitCase').click(function() 
					{
				
				var ctext="Case Details:"+$('#caseType_search option:selected').toArray().map(item => item.text)+"/"+$("#caseNo_search").val()+"/" +$("#caseYear_search").val()+"<br>Rule Date: "+ $("#ruleDate").val()+" <br>Judges: "+$('#judges_search option:selected').toArray().map(item => item.text).join();
				displaySwalAction("warning","Are You Sure", ctext ,updateFAH);
						
						
					});
			
			
			function updateFAH(){
				//alert("called");
				$.ajax({
							type : "POST",
							url : 'legacy/submitFAHCase',
							data : ({
								ruledate : $("#ruleDate").val(),
								judges : $("#judges_search").val().join(","),
								matterType : $("#type_search").val(),
								caseType: $("#caseType_search").val(),
								caseYear: $("#caseYear_search").val(),
								caseNo : $("#caseNo_search").val()
							}),
							success : function(data) {
								
								if(data=="YES"){
									displaySwal("success","FAH UPDATE","Data Saved Successfully");
								}else if(data=="NO CORAM"){
									
									displaySwal("error","FAH UPDATE","No Coram Found");
								}else if(data=="NO CASE"){
									
									displaySwal("error","FAH UPDATE","No Case Found");
								}else{
									
									displaySwal("warning","FAH UPDATE","Error");
								}
							}
				})
				
			}
			
			
			
			
			
			
			
			

			// //////// INITITIALIZATIONS //////////
			
			
			$('.select2').select2({
				
				selectOnClose: true
			});
			
			$.fn.select2.amd.require(['select2/selection/search'], function (Search) {
			    var oldRemoveChoice = Search.prototype.searchRemoveChoice;
			    
			    Search.prototype.searchRemoveChoice = function () {
			        oldRemoveChoice.apply(this, arguments);
			        this.$search.val('');
			    };
			    $('.select2[multiple=""]').select2({
					
					selectOnClose: false
				});
			})
			
			
			$('#ruleDate').on("show.daterangepicker",function(){
				$("#ruleDate").select();
				
			})
			$('#ruleDate').daterangepicker({
				singleDatePicker : true,
				"locale" : {
					"format" : "DD/MM/YYYY"
				},
				showDropdowns: true
				
			});
			$('#ruleDate').inputmask('dd/mm/yyyy');
			

			// //////// INITITIALIZATIONS //////////
		})