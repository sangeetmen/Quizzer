/**
 * 
 */

$(document).ready(
		function() {

			$.ajax({
				url : 'ewrit/preLoadData/uploadewrithc',
				type : "POST",

				success : function(data) {

					var response = eval("(" + JSON.stringify(data) + ")");
					var displayhtml = "";

					for (var j = 0; j < response[0].branches.length; j++) {
						displayhtml += "<option value='"
								+ response[0].branches[j].branchcode + "'>"
								+ response[0].branches[j].branchcode + "-"
								+ response[0].branches[j].branchname
								+ "</option>";
					}
					$("#branches").html(displayhtml);
					$("#branches_search").html(displayhtml);
					// REMOVE AFTER TESTING
					$("#branches").val(13);

				}
			});
			$('.select2').select2();

			singleDatePicker('dispatchDate', 'DD/MM/YYYY');
			// REMOVE AFTER TESTING
			//$("#dispatchDate").val('26/06/2019');
			$("#btnGetDispatchedList").click(function() {
				getDispatchedList();

			});

			$("#btnGetDeclinedList").click(function() {
				getDeclinedList();

			});

//			$("#btnGetAllList").click(function() {
//				getAllList();
//
//			});

			uploadfiledemo();
		});

function getDispatchedList() {

	$("#uploadwritcard").hide();
	$("#hdnlisttype").val('P'); // PENDING

	$.ajax({
		type : "POST",
		url : 'ewrit/upload/getDispatchedList',
		dataType : "json",
		data : ({
			dispatchdate : $("#dispatchDate").val(),
			branchcode : $("#branches").val()
		}),
		success : function(data) {
			$("#dispatcheddiv").show();
			var response = eval("(" + JSON.stringify(data) + ")");
			buildHCUploadTable(response);

		}
	});

}

function buildHCUploadTable(response) {
	var displayhtml = "<table id='dispatched_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
			+ "<thead>"
			+ "<tr>"
			+ "<th> </th>"
			+ "<th>CASE DETAILS</th>"
			+ "<th>NOTICE/WRIT TYPE</th>"
			+ "<th>ORDER DATE</th>"
			+ "<th>AUTHORITY</th>" + "<th>DISPATCH No</th>"
			+ "<th>DISPATCHED BY</th>"

			+ "</thead>" + "<tbody>";
	
	//<i class="fas fa-upload"></i>

	for (var j = 0; j < response.length; j++) {

//		displayhtml += "<tr><td><button type='button' id='btnuploadwrit' onclick=showuploadform('" 	+ response[j].ccin 			+ "','" 				+ response[j].dispatchno 				+ "','"+response[j].casedetails+"'); class='btn btn-block btn-info'>Upload</button> </td>";
		displayhtml += "<tr><td><i class='fas fa-cloud-upload-alt upldbtn' title='Upload eWrit' onclick=showuploadform('" + response[j].ccin 	+ "','" + response[j].dispatchno + "','"+response[j].casedetails+"');></i> </td>";
		displayhtml += "<td value='" + response[j].ccin + "'><a target='_blank' href='"+response[j].enurl+"'>"
				+ response[j].casedetails + "</a></td>";
		displayhtml += "<td >" + response[j].noticename + "</td>";
		displayhtml += "<td>" + response[j].orderdate + "</td>";
		displayhtml += "<td>" + response[j].authorityname + "</td>";
		displayhtml += "<td  >" + response[j].dispatchno + "</td>";
		displayhtml += "<td  >" + response[j].empname + "</td>";

		displayhtml += "</tr>";

	}

	displayhtml += "</tbody></table>";

	$("#dispatcheddiv").html(displayhtml);
	$("#dispatched_table").DataTable();

}

function getDeclinedList() {

	$("#uploadwritcard").hide();
	$("#hdnlisttype").val('D'); // DECLINED

	$.ajax({
		type : "POST",
		url : 'ewrit/upload/getDeclinedList',
		dataType : "json",
		data : ({
			dispatchdate : $("#dispatchDate").val(),
			branchcode : $("#branches").val()
		}),
		success : function(data) {
			$("#dispatcheddiv").show();
			var response = eval("(" + JSON.stringify(data) + ")");


			var displayhtml = "<table id='dispatched_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
					+ "<thead>"
					+ "<tr>"
					+ "<th> </th>"
					+ "<th>CASE DETAILS</th>"
					+ "<th>NOTICE/WRIT TYPE</th>"
					+ "<th>ORDER DATE</th>"
					+ "<th>AUTHORITY</th>" 
					+ "<th>DISPATCH NO</th>"
					+ "<th>DECLINED BY </th>"
					+ "</thead>" + "<tbody>";

			for (var j = 0; j < response.length; j++) {

				displayhtml += "<tr><td><i class='fas fa-cloud-upload-alt upldbtn' title='Upload eWrit' onclick=showuploadform('"
						+ response[j].wid.ccin
						+ "','"
						+ response[j].wid.wid
						+ "','"+response[j].wid.casedetails+"');></i> </td>";

				displayhtml += "<td value='" + response[j].wid.ccin + "'> <a target='_blank' href='"+response[j].wid.encCaseStatusURL	+"'>"
						+ response[j].wid.casedetails + "</a></td>";
				displayhtml += "<td >" + response[j].wid.noticecode.noticename + "</td>";
				displayhtml += "<td>" + response[j].wid.orderdate + "</td>";
				displayhtml += "<td>" + response[j].wid.authorityname + "</td>";
				displayhtml += "<td  >" + response[j].wid.wid + "</td>";
				displayhtml += "<td  >" + response[j].trackedbyname + "</td>";
				
				displayhtml += "</tr>";

			}

			displayhtml += "</tbody></table>";

			$("#dispatcheddiv").html(displayhtml);
			$("#dispatched_table").DataTable();
			
			
			

		}
	});

}

function getAllList() {

	$("#uploadwritcard").hide();
	$("#hdnlisttype").val('A'); // ALL

	$.ajax({
		type : "POST",
		url : 'ewrit/upload/getAllList',
		dataType : "json",
		data : ({
			dispatchdate : $("#dispatchDate").val(),
			branchcode : $("#branches").val()
		}),
		success : function(data) {
			$("#dispatcheddiv").show();
			var response = eval("(" + JSON.stringify(data) + ")");
			buildHCUploadTable(response);

		}
	});

}

function showuploadform(ccin, dispatchno,casedetails) {

	$("#hdnccin").val(ccin);
	$("#hdndispatchno").val(dispatchno);
$("#causeliststatus").html(casedetails);
	$("#uploadwritcard").show();
	$("#dispatcheddiv").hide();

}

function hideuploadform() {

	$("#uploadwritcard").hide();
	$("#dispatcheddiv").show();

}

function uploadfiledemo() {

	$("#frmfileupload").on('submit', function(e) {

		e.preventDefault();
		$.ajax({
			type : 'POST',
			url : 'ewrit/upload/upload',
			data : new FormData(this),
			contentType : false,
			cache : false,
			processData : false,
			success : function(data) {

				if (data.validated) {

					displaySwalAction("success", data.message, "");
					
					if ($("#hdnlisttype").val() == 'P') {
						getDispatchedList();
					} else if ($("#hdnlisttype").val() == 'D') {
						getDeclinedList();
					}
//					else {
//						getAllList();
//					}

					// displaySwalAction("success", data.message, "");
					// $("#currentpassword").val('');
					// $("#newpassword").val('');
					// $("#confirmpassword").val('');

				} else {
					displaySwalAction("error", data.message, "");
				}
				document.getElementById("file").value = null;

			}

		});

	});
}