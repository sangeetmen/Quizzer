$(document).ready(function(){
	var userstable=null;
	var applications=null;
	
	$.ajax({
		url : 'admin/preLoadData/userrole',
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
		    
			
			displayhtml = "";
			var links="";
			applications= response[0].applications;
			for (var j = 0; j < response[0].applications.length; j++) {
				displayhtml += "<option value='"
						+ response[0].applications[j].appId + "'>"
						+ response[0].applications[j].appName
						+ "</option>";
				if(j==0)
				for (var k = 0; k < response[0].applications[j].links.length; k++) {
					links += "<option value='"
							+ response[0].applications[j].links[k].linkspk.linkId + "'>"
							+ response[0].applications[j].links[k].linkName
							+ "</option>";
				}
			}
			$("#links").html(links);
			$("#applications").html(displayhtml);
			
			
			displayhtml = "";
			for (var j = 0; j < response[0].roles.length; j++) {
				displayhtml += "<option value='"
						+ response[0].roles[j].roleid + "'>"
						+ response[0].roles[j].rolename
						+ "</option>";
				
			}
			$("#roles").html(displayhtml);
			
		}
	});
	
	
	
	
	
	$("#manageUsersRoles").click(function(){
		
		
		 var data = $('#allusers_table').DataTable().row('.selected').data();
		 if(data==null){
			 
			 displaySwal("error","User Role","Error: Select atleast one user");
			 return false;
		 }else{
			 $("#usercode").val(data[0]);
			 $("#username").val(data[1]);
			 $.ajax({
					url : 'admin/getUserApps',
					type : "POST",
					data: ({
						usercode : data[0]						
					}),
					success : function(data) {
						
						var response = eval("(" + JSON.stringify(data)+ ")");
						var displayhtml = "<table id='usersroles_table' class='table table-bordered table-striped' cellpadding='0' cellspacing='0' border='0'>"
							+ "<thead>"
							+ "<tr>"
							+ "<th>APPLICATION CATEGORY</th>"
							+ "<th>APPLICATION</th>"
							+ "<th>LINK</th>"
							+ "<th>ROLE</th>"
							+ "<th>ACTIONS</th>"
							+ "</thead>"
							+ "<tbody>";
						
						for (var j = 0; j < response.length; j++) {
							
							displayhtml += "<tr>" 
									+ "<td>"+ response[j].category_name+ "<input type='hidden' value='"+response[j].category_id+"'></td>"
									+ "<td>"+ response[j].app_name+ "<input type='hidden' value='"+response[j].app_id+"'></td>"
									+ "<td>"+ response[j].link_name+ "<input type='hidden' value='"+response[j].link_id+"'></td>"
									+ "<td>"+ response[j].rolename+ "<input type='hidden' value='"+response[j].roleid+"'></td>"
									+ "<td> <button type='button' class='btn btn-block bg-gradient-danger'>Remove Access</button>  </td>"
									+ "</tr>";
							
						}
						
						$("#rolesdiv").html(displayhtml);
						var rolesstable = $("#usersroles_table").DataTable();

						$('#usersroles_table tbody').on( 'click', 'button', function () {
					        //var data = rolesstable.row( $(this).parents('tr') ).data();
					    	 
					    	 $.ajax({
									url : 'admin/removeRole',
									type : "POST",
									data: ({
										usercode : $("#usercode").val(),
										appid: $(this).parents('tr').find("input").eq(1).val(),
										linkid: $(this).parents('tr').find("input").eq(2).val(),
										roleid: $(this).parents('tr').find("input").eq(3).val()
									}),
									success : function(data) {
										
										displaySwal("success","Remove User Role","Role Removed Successfully");
										$("#manageUsersRoles").click();
										}
									})
					    } );
						
						$("#rolesCard").show();
						$('#rolesCard [data-card-widget="collapse"]').CardWidget('expand');
						$('#usersCard [data-card-widget="collapse"]').CardWidget('collapse');
						$("#manageUsersRoles").parent().hide();
						$("#addRoles").parent().show();
						$("#discardChanges").parent().show();
					}
				});
		 }
		
	})
	
	$("#applications").change(function(){
		
		for(var j=0;j<applications.length;j++ ){
			if(applications[j].appId==$("#applications").val()){
				var links="";
				for (var k = 0; k < applications[j].links.length; k++) {
					links += "<option value='"
							+ applications[j].links[k].linkspk.linkId + "'>"
							+ applications[j].links[k].linkName
							+ "</option>";
				}
				$("#links").html(links);
			}
			
			
		}
	})
	
	
	$("#discardChanges").click(function(){
		
		
		$('#rolesCard [data-card-widget="collapse"]').CardWidget('collapse');
		$('#usersCard [data-card-widget="collapse"]').CardWidget('expand');
		$("#rolesCard").hide();
		$("#rolesdiv").html("");
		userstable.$('tr.selected').removeClass('selected');
		$("#manageUsersRoles").parent().show();
		$("#addRoles").parent().hide();
		$("#discardChanges").parent().hide();
		$("#usercode").val("");
		$("#username").val("");
	})
	
	
	$("#saveRole").click(function(){
		 $.ajax({
				url : 'admin/saveNewRole',
				type : "POST",
				data: ({
					usercode : $("#usercode").val(),
					appid: $("#applications").val(),
					linkid: $("#links").val(),
					roleid: $("#roles").val()
				}),
				success : function(data) {
					$("#modal-addUserRole").modal("hide");
					displaySwal("success","New User Role","Role Added Successfully");
					$("#manageUsersRoles").click();
					}
				})
		
		
	})
	
	
	$('.select2').select2({
		selectOnClose: true
	});
	
})