/**
 * 
 */

$(document).ready(function() {
					
		$.ajax({
			url : 'court/preLoadData/urgentcirculation',
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
				for (var j = 0; j < response[0].casetypes.length; j++) {
					displayhtml += "<option value='"
							+ response[0].casetypes[j].caseType + "'>"
							+ response[0].casetypes[j].typeName+"-"+response[0].casetypes[j].fullForm
							+ "</option>";
				}

				$("#caseType").html(displayhtml);			
				
				
				displayhtml = "";
				for (var j = 0; j < response[0].advocates.length; j++) {
					displayhtml += "<option value='"
							+ response[0].advocates[j].advCode + "'>"
							+ response[0].advocates[j].advCode+"-"+response[0].advocates[j].advName
							+ "</option>";
				}

				$("#advocates").html("<option></option>"+displayhtml);
				
			}
		});					
		
		
		////////// INITITIALIZATIONS //////////
		
		$('.select2').select2();

		$('#listingDate').daterangepicker({
			singleDatePicker : true,
			"locale" : {
				"format" : "DD/MM/YYYY"
			}						
		});
		
		$('#time').daterangepicker({
            timePicker: true,
            timePicker24Hour: true,
            timePickerIncrement: 1,
            timePickerSeconds: true,
            locale: {
                format: 'HH:mm:ss'
            }
        }).on('show.daterangepicker', function (ev, picker) {
            picker.container.find(".calendar-table").hide();
        });
		
		
		$(".questions").bootstrapSwitch();
		
		////////// INITITIALIZATIONS //////////					
					
});


