$(function(){
	const MAX_PLAYERS=12;
	var curTime=1;
	var myTimer;
	$(".settingsBut").click(function(event){
	  event.preventDefault()
	  $(".results").hide();
	  $(".settings").show();
	});
	$(".resultsBut").click(function(event){
	  event.preventDefault()
	  $(".settings").hide();
	  $(".results").show();
	});
	$("button").click(function(event){
		if($("button").html() == "Start"){
			$("#timeStatus").html($("#timeInput").val()+" minutes remaining");
			$('.progress-bar').css('width', 0+'%')
			myTimer = setInterval(function(){
				console.log("tick")
				$("#timeStatus").html($("#timeInput").val()-curTime+" minutes remaining");
				valeur = (curTime)/$("#timeInput").val()*100
				$('.progress-bar').css('width', valeur+'%')
			  curTime+=1;
				if(parseInt($("#timeInput").val())+1 == curTime){
					curTime = 1;
					clearInterval(myTimer);
					$("#timeStatus").html("No game running.");
					$("button").addClass("btn-success").removeClass("btn-danger")
					$("button").html("Start")
					$("#playerInput").removeAttr('disabled');
					$("#timeInput").removeAttr('disabled');
				}


		 }, 60000);
		}else if($("button").html() == "Stop") {
			if(myTimer){
				clearInterval(myTimer);
				curTime=1
			}

		}
	});
	$("button").click(function(event){
		if($("button").html() == "Start"){
			$("button").addClass("btn-danger").removeClass("btn-success")
			$("button").html("Stop")
			$("#playerInput").attr('disabled', 'disabled');
			$("#timeInput").attr('disabled', 'disabled');
			//$("#timeStatus").html($("#timeInput").val()+" minutes remaining");
		}else if($("button").html() == "Stop") {
			$("button").addClass("btn-success").removeClass("btn-danger")
			$("button").html("Start")
			$("#timeStatus").html("No game running.");
			$("#playerInput").removeAttr('disabled');
			$("#timeInput").removeAttr('disabled');
		}
	});
	for(i=2; i<=MAX_PLAYERS;i++){
		$("#playerInput").append('<option>'+i+'</option>')
	}
	for(i=1; i<=parseInt($("#playerInput").val());i++){
		$("#resultBod").append('<tr><td>Player '+i+'</td>'+
		  ('<td>'+i+'</td>').repeat(4)+'</tr>')
	}
	$("#playerInput").change(function(){
		$("#resultBod").empty()
		for(i=1; i<=parseInt($("#playerInput").val());i++){
			$("#resultBod").append('<tr><td>Player '+i+'</td>'+
			  ('<td>'+i+'</td>').repeat(4)+'</tr>')
		}
	})
}
)
