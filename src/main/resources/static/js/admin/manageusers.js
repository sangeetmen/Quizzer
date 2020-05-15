$(document).ready(function(){

	$.ajax({
		url : 'admin/preLoadData/manageusers',
		type : "POST",

		success : function(data) {
			
			var response = eval("(" + JSON.stringify(data)+ ")");
			var displayhtml = "";
			
			
			
			var displayhtml = "<table id='allusers_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
				+ "<thead>"
				+ "<tr>"
				+ "<th>EMP. CODE</th>"
				+ "<th>SALUTATION</th>"
				+ "<th>NAME</th>"
				+ "<th>SHORTNAME</th>"
				+ "<th>DISPLAY</th>"
				+ "</thead>"
				+ "<tbody>";
			
			for (var j = 0; j < response[0].users.length; j++) {
				
				displayhtml += "<tr>" 
						+ "<td>"+ response[0].users[j].empcode+ "</td>"
						+ "<td>"+ response[0].users[j].salutation+ "</td>"
						+ "<td>"+ response[0].users[j].empname+ "</td>"
						+ "<td>"+ response[0].users[j].shortname+ "</td>"
						+ "<td>"+ response[0].users[j].display+ "</td>"
						+ "</tr>";
				
			}
			
			$("#usersdiv").html(displayhtml);
			userstable = $("#allusers_table").DataTable();
			
			$('#allusers_table tbody').on( 'click', 'tr', function () {
		        if ( $(this).hasClass('selected') ) {
		            $(this).removeClass('selected');
		        }
		        else {
		        	userstable.$('tr.selected').removeClass('selected');
		            $(this).addClass('selected');
		        }
		    })	    
			
			
			
		}
	});
	
})