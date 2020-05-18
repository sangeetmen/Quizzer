<div class="card card-default color-palette-box animated" id='questioncard'>
	
	<div class="card-header">
			<h1 class='display-4 text-fuchsia text-center'>
				<a class="btn btn-app" style='float:left' id='prevquestion'> <i class="fas fa-chevron-circle-left"></i>
					Previous
				</a> 
				QUESTION NO. <span id="qno">1</span> 
				<a class="btn btn-app" style='float:right' id='nextquestion'> <i class="fas fa-chevron-circle-right"></i>
				Next
				</a>
			</h1>
	</div>
	<div class="card-body">


		<div class="text-center mb-3 mt-3" id="question" >
			<input type='hidden' id='questionpoints' value='10'>
			<h1 class='text-maroon' id='question'>WHO IS THE PERSIDENT OF UNITED STATES?</h1>
		</div>
<!-- 		<img class="card-img-top" src='data:image/svg+xml;charset=UTF-8,%3Csvg width%3D"286" height%3D"180" xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox%3D"0 0 286 180" preserveAspectRatio%3D"none"%3E%3Cdefs%3E%3Cstyle type%3D"text%2Fcss"%3E%23holder_1721e83e0e7 text %7B fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C monospace%3Bfont-size%3A14pt %7D %3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg id%3D"holder_1721e83e0e7"%3E%3Crect width%3D"286" height%3D"180" fill%3D"%23777"%3E%3C%2Frect%3E%3Cg%3E%3Ctext x%3D"98" y%3D"96.3"%3EImage cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' alt="Card image cap"> -->
	</div>
	<div class="card-body">	
		<div>
			<div class="row text-center mb-2">
				<div class="btn-group col-lg-6">
					<span class="input-group-prepend">
						<button type="button"
							class="btn btn-block btn-outline-primary btn-lg">
							<i class="fa">A</i>
						</button>
					</span>
					<button type="button"
						class="btn btn-block btn-outline-primary btn-lg options" id='optionA'>Option A</button>
				</div>



				<div class="btn-group col-lg-6">
					<span class="input-group-prepend">
						<button type="button"
							class="btn btn-block btn-outline-primary btn-lg">
							<i class="fa">B</i>
						</button>
					</span>
					<button type="button"
						class="btn btn-block btn-outline-primary btn-lg options" id='optionB'>Option B</button>
				</div>

			</div>
			<div class="row text-center mb-2">
				<div class="btn-group col-lg-6">
					<span class="input-group-prepend">
						<button type="button"
							class="btn btn-block btn-outline-primary btn-lg">
							<i class="fa">C</i>
						</button>
					</span>
					<button type="button"
						class="btn btn-block btn-outline-primary btn-lg correct options" id='optionC'>Option C</button>
				</div>

				<div class="btn-group col-lg-6">
					<span class="input-group-prepend">
						<button type="button"
							class="btn btn-block btn-outline-primary btn-lg">
							<i class="fa">D</i>
						</button>
					</span>
					<button type="button"
						class="btn btn-block btn-outline-primary btn-lg options" id='optionD'>Option D</button>
				</div>
			</div>
		</div>
	</div>
</div>
<h2 class='text-center assign' style='display:none;'>Assign Points To Team</h2>

<div class="modal fade" id="roundModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<audio id="correctAudio">
  <source src="sounds/correct.mp3" type="audio/mp3">
</audio>
<audio id="wrongAudio">
  <source src="sounds/wrong.mp3" type="audio/mp3">
</audio>
<audio id="errorAudio">
  <source src="sounds/error.mp3" type="audio/mp3">
</audio>
<script src="js/playquiz.js"></script>