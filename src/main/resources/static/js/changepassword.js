/**
 * 
 */
var changepassvalidator;
$(document).ready(function() {


	changepassvalidator = $("#changePasswdForm").validate(
			{
				rules : {
					currentpassword : {
						required : true,
						maxlength : 50
					},
					newpassword : {
						required : true,
						maxlength : 50
					},
					confirmpassword : {
						required : true,
						maxlength : 50,
						equalTo: "#newpassword"
					}

				},
				messages : {
					currentpassword : {
						required : "Current password field cannot be empty"
					},
					newpassword : {
						required : "New password field cannot be empty"
					},
					confirmpassword : {
						required : "Confirm password field cannot be empty",
							equalTo: "New password and confirm password does not match"

					}
				},
				errorElement : "em",
				
				highlight : function(element, errorClass, validClass) {
				//	$(element).parent().addClass("has-error").removeClass(	"has-success");
					$(element).addClass("is-invalid").removeClass( 	"is-valid");
				},
				unhighlight : function(element, errorClass, validClass) {
					//$(element).parent().addClass("has-success").removeClass("has-error");
					$(element).addClass("is-valid").removeClass( 	"is-invalid");
				}


			});
	
	$("#changePasswdForm").on('submit', function(e) {
		
		e.preventDefault();

		 if (!changepassvalidator.form()) {
		
		 return;
		 }

		$.ajax({
			type : 'POST',
			url : 'changepassword',
			data : new FormData(this),
			contentType : false,
			cache : false,
			processData : false,
			success : function(data) {

				if (data.validated) {
					displaySwalAction("success", data.message, "");
					$("#currentpassword").val('');
					$("#newpassword").val('');
					$("#confirmpassword").val('');

				} else {
					displaySwalAction("error", data.message, "");
				}
				// $("#prisonerid")
				// .val(
				// response.prisonerid);

				// getPrisonerList();
				// backPrisonerInfo();
			}
		});

	});

});
