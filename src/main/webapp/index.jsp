<!DOCTYPE html>
<%@ page pageEncoding="UTF-8"%>

<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Quizzer | Home </title>
  <!-- Tell the browser to be responsive to screen width -->
  <link rel="shortcut icon" href="css/img/favicon.png" type="image/png">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="uifiles/plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="css/ionicons.min.css">
   <link rel="stylesheet" href="css/jqueryui.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="uifiles/plugins/datatables-bs4/css/dataTables.bootstrap4.css">
  <link rel="stylesheet" href="uifiles/plugins/datatables-select/css/select.bootstrap4.css">
   <!-- daterange picker -->
  <link rel="stylesheet" href="uifiles/plugins/daterangepicker/daterangepicker.css">
  <!-- iCheck for checkboxes and radio inputs -->
  <link rel="stylesheet" href="uifiles/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Bootstrap Color Picker -->
  <link rel="stylesheet" href="uifiles/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css">
  <!-- Tempusdominus Bbootstrap 4 -->
  <link rel="stylesheet" href="uifiles/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="uifiles/plugins/select2/css/select2.min.css">
  <!-- SweetAlert2 -->
  <link rel="stylesheet" href="uifiles/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
  <!-- Toastr -->
  <link rel="stylesheet" href="uifiles/plugins/toastr/toastr.min.css">
  <!-- Bootstrap4 Duallistbox -->
  <link rel="stylesheet" href="uifiles/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">  
  <!-- iCheck -->
  <link rel="stylesheet" href="uifiles/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="uifiles/dist/css/adminlte.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="uifiles/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="uifiles/plugins/daterangepicker/daterangepicker.css">
  <!-- summernote -->
  <link rel="stylesheet" href="uifiles/plugins/summernote/summernote-bs4.css">
  <link rel="stylesheet" href="uifiles/plugins/bootstrap-switch/css/bootstrap4/bootstrap-switch.css">
  <link rel="stylesheet" href="css/globalstyle.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="css/fontcss.css" rel="stylesheet">
   <style>
  .ui-autocomplete-category {
    font-weight: bold;
    padding: .2em .4em;
    margin: .8em 0 .2em;
    line-height: 1.5;
  }
  .ui-autocomplete { position: absolute; cursor: default;z-index:1034 !important;}  
  </style>
</head>
<body class="hold-transition sidebar-hidden sidebar-collapse">
<div class="wrapper">

		<!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      
    </ul>

    <!-- SEARCH FORM -->
<!--     <form class="form-inline ml-3"> -->
<!--       <div class="input-group input-group-sm"> -->
<!--         <input class="form-control form-control-navbar" type="search" placeholder="Search" id="menusearch" aria-label="Search"> -->
<!--         <div class="input-group-append"> -->
<!--           <button class="btn btn-navbar" type="submit"> -->
<!--             <i class="fas fa-search"></i> -->
<!--           </button> -->
<!--         </div> -->
<!--       </div> -->
<!--     </form> -->
<!--     <ul class="navbar-nav "> -->
<!--    	<li class="nav-item dropdown"> -->
<!--       <a class="nav-link" data-toggle="dropdown" id="breadcrumb"  href="#" aria-expanded="false"><a> -->
<!--         <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right" id="dropdownlinks"> -->
          
<!--         </div> -->
<!--       </li> -->
<!--     </ul> -->
    
<!--    		<div class="topcontainer one"> -->
<!-- 		  <div class="bk l"> -->
<!-- 		    <div class="arrow top"></div>  -->
<!-- 		  </div> -->
		  
<!-- 		  <div class="mainheader"> -->
<!-- 		    <div  class="brand-text font-weight-bolder" > -->
<!-- 		    	 <img src="css/img/0hcemblem.png" alt="GHC Logo" class="brand-image img-circle elevation-3" -->
<!-- 			           style=""> -->
<!-- 			     <span class="brand-text font-weight-bolder" >eGujCourtIS</span> -->
<!-- 		    </div>    -->
<!-- 		  </div> -->
		  
<!-- 		  <div class="bk r"> -->
<!-- 		    <div class="arrow top"></div>  -->
<!-- 		  </div> -->
		
<!-- 		</div> -->
<!--     <ul class="navbar-nav ml-auto"> -->
<!--    	<li class="nav-item dropdown"> -->
<!--         <a class="nav-link" data-toggle="dropdown" href="#"> -->
<!--           <i class="far fa-user"></i> -->
<!--           span class="badge badge-warning navbar-badge"></span -->
<!--         </a> -->
<!--         <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right"> -->
<!--           <span class="dropdown-item dropdown-header">User Opertions</span> -->
<!--           <div class="dropdown-divider"></div> -->
<!--           <a href="/changepassword" class="dropdown-item othlinks"> -->
<!--             <i class="fas  fa-sign-out mr-2"></i> Change Password -->
<!--           </a> -->
<!--           <a href="logout" class="dropdown-item"> -->
<!--             <i class="fas  fa-sign-out mr-2"></i> Logout -->
<!--           </a> -->
<!--         </div> -->
<!--       </li> -->
<!--       <li class="nav-item"> -->
<!--         <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"> -->
<!--           <i class="fas fa-th-large"></i> -->
<!--         </a> -->
<!--       </li> -->
<!--     </ul> -->
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="" alt="Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Quizzer</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar os-host-overflow os-host-overflow-y ">
      <!-- Sidebar user panel (optional) -->

      <nav class="mt-2" id='sidemenu'>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="menuUl">
         
           
        </ul>
      </nav>
    </div>
  </aside>

 
  <div class="content-wrapper">
   
    <!-- div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">eGujCourtIS</h1>
          </div>
         
        </div>
      </div>
    </div-->
   

    <!-- Main content -->
    <section class="content" id="bodycontent">
      <div class="container-fluid">
        
        <div class="row">
        </div>
        
        <div class="row">
        </div>

      </div>
    </section>
  </div>
  
  <footer class="main-footer">
  <div >
<div class="row">
	<div class="col">
		<div class="info-box">
			<span class="info-box-icon bg-info"><i class="far">A</i></span>

			<div class="info-box-content">
				<span class="info-box-text">TEAM A</span> <span
					class="info-box-number">1,410</span>
			</div>
			<!-- /.info-box-content -->
		</div>
		<!-- /.info-box -->
	</div>
	<!-- /.col -->
	<div class="col">
		<div class="info-box">
			<span class="info-box-icon bg-success"><i class="far">B</i></span>

			<div class="info-box-content">
				<span class="info-box-text">TEAM B</span> <span
					class="info-box-number">410</span>
			</div>
			<!-- /.info-box-content -->
		</div>
		<!-- /.info-box -->
	</div>
	<!-- /.col -->
	<div class="col">
		<div class="info-box">
			<span class="info-box-icon bg-warning"><i class="far">C</i></span>

			<div class="info-box-content">
				<span class="info-box-text">TEAM C</span> <span
					class="info-box-number">13,648</span>
			</div>
			<!-- /.info-box-content -->
		</div>
		<!-- /.info-box -->
	</div>
	<!-- /.col -->
	<div class="col">
		<div class="info-box">
			<span class="info-box-icon bg-danger"><i class="far">D</i></span>

			<div class="info-box-content">
				<span class="info-box-text">TEAM D</span> <span
					class="info-box-number">93,139</span>
			</div>
			<!-- /.info-box-content -->
		</div>
		<!-- /.info-box -->
	</div>
	<!-- /.col -->
	<div class="col">
		<div class="info-box">
			<span class="info-box-icon bg-danger"><i class="far">E</i></span>

			<div class="info-box-content">
				<span class="info-box-text">TEAM E</span> <span
					class="info-box-number">93,139</span>
			</div>
			<!-- /.info-box-content -->
		</div>
		<!-- /.info-box -->
	</div>
</div>
</div>
    <strong>Quizzer <a href="#">Developed By Curious Design Studio</a>.</strong>
    
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0 (Beta)
    </div>
  </footer>

  
  <aside class="control-sidebar control-sidebar-dark">
  </aside>
  
</div>
<div id="overlay" style="display:none;">
    <div class="spinner" id="ajaxloader">
     <img src="css/img/ajaxloader.svg" alt="Loading..." style=""/>
     </div>
    <br/>
    <h3>Processing...Please Wait</h3>
</div>

<!-- jQuery -->
<script src="uifiles/plugins/jquery/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="uifiles/plugins/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="uifiles/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- DataTables -->
<script src="uifiles/plugins/datatables/jquery.dataTables.js"></script>
<script src="uifiles/plugins/datatables-bs4/js/dataTables.bootstrap4.js"></script>
<!-- Select2 -->
<script src="uifiles/plugins/select2/js/select2.full.min.js"></script>
<!-- SweetAlert2 -->
<script src="uifiles/plugins/sweetalert2/sweetalert2.min.js"></script>
<!-- Toastr -->
<script src="uifiles/plugins/toastr/toastr.min.js"></script>
<!-- InputMask -->
<script src="uifiles/plugins/inputmask/jquery.inputmask.bundle.js"></script>
<script src="uifiles/plugins/moment/moment.min.js"></script>
<!-- date-range-picker -->
<script src="uifiles/plugins/daterangepicker/daterangepicker.js"></script>
<!-- bootstrap color picker -->
<script src="uifiles/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
<!-- ChartJS -->
<script src="uifiles/plugins/chart.js/Chart.min.js"></script>
<!-- Sparkline -->
<script src="uifiles/plugins/sparklines/sparkline.js"></script>
<!-- jQuery Knob Chart -->
<script src="uifiles/plugins/jquery-knob/jquery.knob.min.js"></script>
<!-- daterangepicker -->
<script src="uifiles/plugins/moment/moment.min.js"></script>
<script src="uifiles/plugins/daterangepicker/daterangepicker.js"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="uifiles/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
<!-- Summernote -->
<script src="uifiles/plugins/summernote/summernote-bs4.min.js"></script>
<!-- overlayScrollbars -->
<script src="uifiles/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- FastClick -->
<script src="uifiles/plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="uifiles/dist/js/adminlte.js"></script>
<script src="uifiles/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="uifiles/dist/js/demo.js"></script>
<script src="js/globalscripts.js"></script>
<script src="js/indexPage.js"></script>
</body>
</html>