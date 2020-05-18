(function( $ ){
	   $.fn.cardAction = function(option) {
		  if(option=='collapse'){
			$(this).find('.card-body').Widget('collapse');
			var toolIcon=$(this).find('div').find('.fa-minus');
			$(toolIcon).removeClass('fa-minus');
			$(toolIcon).addClass('fa-plus');
		  }
		  else if(option=='expand'){
			$(this).find('.card-body').Widget('expand');						
			var toolIcon=$(this).find('div').find('.fa-plus');
			$(toolIcon).removeClass('fa-plus');
			$(toolIcon).addClass('fa-minus');			  
		  }
	      return this;
	   }; 
	}( jQuery));

function dispAjaxError(ajaxErrorResponse,ajaxOptions, thrownError){
	
	switch(ajaxErrorResponse.status){
		case 401:
			displaySwalAction("error","egujCourtIS -> Error","Your Session has expired. Please Re-Login", function(){
				
				document.location.href="login";
			});
			
			break;
		default: 
			console.log(ajaxErrorResponse);
			console.log(ajaxOptions);
			console.log(thrownError);
			displaySwal("error","egujCourtIS -> Error","Error: "+"("+ajaxErrorResponse.status+") <br>"+ajaxErrorResponse.responseJSON.message);
			break;
	}
	
}

function displayToast(toastType,toastHeading,toastBody){
	//displayToast("success","test head","body of toast");
	
	toastr.options = {
			  "closeButton": false,
			  "debug": false,
			  "newestOnTop": false,
			  "progressBar": true,
			  "positionClass": "toast-top-full-width",
			  "preventDuplicates": false,
			  "onclick": null,
			  "showDuration": "300",
			  "hideDuration": "1000",
			  "timeOut": "5000",
			  "extendedTimeOut": "1000",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut"
			}
	
	toastr[toastType](toastBody, toastHeading);
	
}

$(document).on("focus", ".select2", function (e) {
	  if (e.originalEvent) {
	    var s2element = $(this).siblings("select:enabled");
	    s2element.select2("open");
	    // Set focus back to select2 element on closing.
	    s2element.on("select2:closing", function () {
	      if (s2element.val()) s2element.select2("focus");
	    });
	  }
	});



function displaySwal(toastType,toastHeading,toastBody){
	
	//displaySwal("success","test head","body of toast");
	
	
Swal.fire({
	  type: toastType,
	  title: toastHeading,
	  html: toastBody,
	  width: 800
	})
}


function SwalConfirm(toastType,toastHeading,toastBody,callback){
	
	
//	Swal.fire({
//	      title: toastHeading,
//	      html: toastBody,
//	      type: toastType,
//	      showCancelButton: true,
//	      confirmButtonClass: "btn-danger",
//	      confirmButtonText: "Yes, delete it!",
//	      cancelButtonText: "No, cancel plx!"
//	    }).then(function(isConfirm) {
//	    	alert(isConfirm);
//	        if (isConfirm) {
//	        	 callback();
//	          } else {
//	        	alert("No CALL");
//	            swal("Cancelled", "Your imaginary file is safe :)", "error");
//	          }
//	        })
	
	
	
	
	    
	    
	    
	    	
	    	
	    
}

function displaySwalAction(toastType,toastHeading,toastBody,callback){
	
	//displaySwal("success","test head","body of toast");
	
	
Swal.fire({
	  type: toastType,
	  title: toastHeading,
	  html: toastBody,
	  width: 800
	}).then((result) => {
		  callback();
	})
}
	


$( document ).ajaxStart(function() {
	
	$("#ajaxloader").attr("src","css/img/ajaxloader.svg");
	$('#overlay').fadeIn();
	});
$( document ).ajaxError(function(event, xhr, ajaxOptions, thrownError) {
	dispAjaxError(xhr, ajaxOptions, thrownError);
});

$( document ).ajaxStop(function() {
	
	$('#overlay').fadeOut();
	$("#ajaxloader").attr("src","css/img/ajaxloader.svg");
	
});

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = id;//document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        $(obj).html(current);
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}



