$(document).ready(function(){
	
	
		$.ajax({
			url : 'listing/preLoadData/allocation',
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
		
		
		$('.select2').select2();

		$('#listingDate').daterangepicker({
			singleDatePicker : true,
			"locale" : {
				"format" : "DD/MM/YYYY"
			}						
		});
		
});