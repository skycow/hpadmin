$(function(){
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
			$("button").addClass("btn-danger").removeClass("btn-success")
			$("button").html("Stop")
		}else if($("button").html() == "Stop") {
			$("button").addClass("btn-success").removeClass("btn-danger")
			$("button").html("Start")			
		}
	});
}
)
