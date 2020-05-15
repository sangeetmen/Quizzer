/**
 * 
 */

$(document).ready(
		function() {

			$.ajax({
				url : 'ewrit/preLoadData/approveewrithc',
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
			// getUploadedWritList();

			$("#btnUploadedWritList").click(function() {
				getUploadedWritList();

			});
			uploadfiledemo();
		});

function getUploadedWritList() {

	$
			.ajax({
				type : "POST",
				url : 'ewrit/approve/getAllHCPendingforApproveList',
				dataType : "json",
				data : ({
					branchcode : $("#branches").val()
				}),
				success : function(data) {
					$("#hcapprovediv").show();
					var response = eval("(" + JSON.stringify(data) + ")");
					var displayhtml = "<table id='hcapprove_tbl' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
							+ "<thead>" + "<tr>";

					// if (response.length > 0) {
					// displayhtml += "<th colspan='3'></th>"
					// } else {
					// displayhtml += "<th ></th>"
					// }

					displayhtml += "<th ></th>"

					displayhtml += "<th>CASE DETAILS</th>"
							+ "<th>NOTICE/WRIT TYPE</th>"
							+ "<th>AUTHORITY</th>" + "<th>ESTABLISHMENT</th>"
							+ "<th>DISPATCH NO</th>" + "<th>UPLOADED BY</th>"
							// + "<th>DISPATCHED BY DEPT</th>"

							+ "</tr></thead>" + "<tbody>";

					for (var j = 0; j < response.length; j++) {

						// displayhtml += "<td>" + brsrno + "</td>";
						// displayhtml += "<tr><td><button type='button'
						// data-toggle='modal' data-target='#modal-default'
						// onclick=confirmappewrit('"
						// + response[j].wid.wid
						// + "','"
						// + response[j].trackid
						// + "','A'); class='btn btn-block
						// btn-info'>APPROVE</button></td>";

						displayhtml += "<tr><td><i class='fas fa-cloud-upload-alt upldbtn' title='Upload Reviewed eWrit' onclick=showuploadform('"
							+ response[j].wid.ccin
							+ "','"
							+ response[j].wid.wid
							+ "','"
							+ response[j].wid.casedetails
							+ "');>&nbsp;</i>";

						displayhtml += "<i class='fas fa-times dclinbtn' title='Decline eWrit' data-toggle='modal' data-target='#modal-decline' onclick=confirmappewrit('"
								+ response[j].wid.wid
								+ "','"
								+ response[j].trackid + "','D'); >&nbsp;</i> ";

//						displayhtml += "<i class='fas fa-eye viwbtn' title='View eWrit'  onclick=iframpedownload('ewrit/upload/viewewrit?wid="
//								+ response[j].wid.wid
//								+ "&ccin="
//								+ response[j].wid.ccin + "'); >&nbsp;</i> ";

						displayhtml += "<i class='fas fa-file-download viwbtn' title='View eWrit'  onclick=window.open('ewrit/viewewrit?wid="
								+ response[j].wid.wid
								+ "&ccin="
								+ response[j].wid.ccin
								+ "'); >&nbsp;</i> </td>";

						displayhtml += "<td><a target='_blank' href='"
								+ response[j].wid.encCaseStatusURL + "'>"
								+ response[j].wid.casedetails + "</a></td>";
						displayhtml += "<td>"
								+ response[j].wid.noticecode.noticename
								+ "</td>";
						displayhtml += "<td>" + response[j].wid.authorityname
								+ "</td>";
						displayhtml += "<td>" + response[j].wid.estname
								+ "</td>";
						displayhtml += "<td>" + response[j].wid.wid + "</td>";
						// displayhtml += "<td>" + response[j].branchname +
						// "</td>";
						displayhtml += "<td>" + response[j].trackedbyname
								+ "</td>";

						displayhtml += "</tr>";

					}

					displayhtml += "</tbody></table>";

					$("#hcapprovediv").html(displayhtml);
					var stable = $("#hcapprove_tbl").DataTable({
						'destroy' : true
					});

				}
			});

}

function confirmappewrit(wid, trackid, action) {
	$("#hdntrackid").val(trackid);

	$("#hdnwid").val(wid);
	$("#hdnaction").val(action);
	if (action == 'D') {
		$(".clstitle").html('Decline');
	} else {
		$(".clstitle").html('Approve');
	}
	// $("#modal-default").dialog();

}


function declineewrit() {

	$('#modal-decline').modal("hide");
	var hdntrackid = $("#hdntrackid").val();
	var hdnwid = $("#hdnwid").val();
	var hdnaction = $("#hdnaction").val();

	$.ajax({
		type : 'POST',
		url : 'ewrit/review/declineewrithc',
		data : ({
			trackid : hdntrackid,
			wid : hdnwid,
			action : hdnaction
		}),

		success : function(data) {

			if (data.validated) {

				displaySwalAction("success", data.message, "");
				getUploadedWritList();

			} else {
				displaySwalAction("error", data.message, "");
			}

		}

	});
}


function downloadewritfile(wid, fname) {

	window.open('ewrit/downloadewrit?filename=' + fname, '_self');
	// window.open('ewrit/downloadewrit?wid='+wid, '_self');

}

function iframpedownload(linkurl) {

	//linkurl="http://localhost:8080/files/Calendar2020.pdf";
	//$("#frame").attr("src",  linkurl);

	$('#orderdiv').dialog({
		width : 2000,
		modal : true,
		position : {
			top : 'top',
			at : 'top',
			of : $('#divcasedetail')

		}
	});
	$("#orderdiv").css("visibility", "visible");
	$('#orderdiv').dialog('open');
	return false;

	// function myfunViewDownLoad(ccin, onum, option, casedetail, obj, odate) {
	// $("#frame").attr("src", "http://10.225.19.26:8098/orders/" +
	// ccin.substring(ccin.length - 4) + "/" + ccin + "-" + onum + ".pdf");
	// $('#orderdiv').dialog({width: 2000, modal: true, position: {
	// top: 'top',
	// at: 'top',
	// of: $('#divcasedetail')
	//
	// }});
	// $("#orderdiv").css("visibility", "visible");
	// $('#orderdiv').dialog('open');
	// return false;
	//	    
	// }
}

function closeOrderdialog() {
	$("#orderdiv").dialog('close');
	$("#orderdiv").css("visibility", "none");
}


function uploadfiledemo() {

	$("#frmfileupload").on('submit', function(e) {

		e.preventDefault();
		$.ajax({
			type : 'POST',
			url : 'ewrit/approve/upload',
			data : new FormData(this),
			contentType : false,
			cache : false,
			processData : false,
			success : function(data) {

				if (data.validated) {

					displaySwalAction("success", data.message, "");
					
					getUploadedWritList();
					hideuploadform();

				} else {
					displaySwalAction("error", data.message, "");
				}
				document.getElementById("file").value = null;

			}

		});

	});
}

function showuploadform(ccin, dispatchno, casedetails) {

	$("#hdnccin").val(ccin);
	$("#hdndispatchno").val(dispatchno);
	$("#causeliststatus").html(casedetails);
	$("#uploadwritcard").show();
	$("#hcapprovediv").hide();

}

function hideuploadform() {

	$("#uploadwritcard").hide();
	$("#hcapprovediv").show();

}
