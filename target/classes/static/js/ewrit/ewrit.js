/**
 * 
 */

function singleDatePicker(controlID, format) {
	$('#'+ controlID  ).daterangepicker({
		singleDatePicker : true,
		"locale" : {
			"format" : format
		}
	});
	
}