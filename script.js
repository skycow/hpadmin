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
}
)

