

<div class="row">

	<div class="col">
		<div class="card card-info" id="uploadwritcard">
			<div class="card-header card-warning" id="statusheader">
				<h3 class="card-title">
					<i class="fas "></i>Change Password <span id="causeliststatus"></span>
				</h3>
			</div>
		</div>


		<div id="prisonerinfotb">

			<form class="form-horizontal form2d" name="changePasswdForm" 	id="changePasswdForm">
				<!-- form start -->
				<div class="col-md-12">

					<input type="hidden" id="empcode" name="empcode" /> 

					<div class="card-body">

						<div class="form-row">
							<div class="form-group row col-sm-3">
								<label for="prisonername" class="col-sm-6 control-label">Current
									Password :</label> <input type="password" class="form-control"
									name="currentpassword" id="currentpassword" />

							</div>

						</div>

						<div class="form-row">

							<div class="form-group row col-sm-3">
								<label for="arrestdate" class="col-sm-6 control-label required">New
									Password :</label> <input type="password" class="form-control "
									name="newpassword" id="newpassword" />
							</div>

						</div>

						<div class="form-row">

							<div class="form-group row col-sm-3">
								<label for="casedetails" class="col-sm-6 control-label required">Confirm
									Password: </label> <input type="password" class="form-control"
									id="confirmpassword" name="confirmpassword" />
							</div>
						</div>

					</div>
				</div>

				<div class="card-footer">
					<button type="submit" id="employeesavebtn" class="btn btn-info">SAVE</button>
					
				</div>
			</form>
		</div>

	</div>
</div>

<script src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/changepassword.js" />