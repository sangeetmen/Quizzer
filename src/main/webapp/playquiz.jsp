<div class="card card-default color-palette-box animated" id='questioncard'>
	
	<div class="card-header">
			<h1 class='display-4 text-fuchsia text-center'>
				<a class="btn btn-app" style='float:left' id='prevquestion'> <i class="fas fa-chevron-circle-left"></i>
					Previous
				</a> 
				QUESTION NO. <span id="qno"></span> 
				<a class="btn btn-app" style='float:right' id='nextquestion'> <i class="fas fa-chevron-circle-right"></i>
				Next
				</a>
			</h1>
	</div>
	<div class="card-body">

		<input type="hidden" id="questionpoints" value=""/>
		<div class="text-center mb-3 mt-3" >
			<h1 class='text-maroon'><span id='question'></span></h1>
		</div>
	<img class="card-img-top" src='' alt="Question Image" style='display:none;height: 400px;width: 600px; margin:0 auto;' id="questionimage"> 
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
						class="btn btn-block btn-outline-primary btn-lg options" id='option1'></button>
				</div>



				<div class="btn-group col-lg-6">
					<span class="input-group-prepend">
						<button type="button"
							class="btn btn-block btn-outline-primary btn-lg">
							<i class="fa">B</i>
						</button>
					</span>
					<button type="button"
						class="btn btn-block btn-outline-primary btn-lg options" id='option2'></button>
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
						class="btn btn-block btn-outline-primary btn-lg  options" id='option3'></button>
				</div>

				<div class="btn-group col-lg-6">
					<span class="input-group-prepend">
						<button type="button"
							class="btn btn-block btn-outline-primary btn-lg">
							<i class="fa">D</i>
						</button>
					</span>
					<button type="button"
						class="btn btn-block btn-outline-primary btn-lg options" id='option4'></button>
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