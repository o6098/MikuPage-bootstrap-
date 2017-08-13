$(function(){
	$("#left").hide();
	$(".subs").hide();
	var $actbtn = $(button1);
	$("#button1").click(function(){
		$actbtn.removeClass("press").addClass("main");
		$actbtn = $(this).removeClass("main").addClass("press");
		$(".subs").hide();
		$("#left").hide(400);
		$("#left").show(800);
		$("#chara").show(800);
	});
	$("#button2").click(function(){
		$actbtn.removeClass("press").addClass("main");
		$actbtn = $(this).removeClass("main").addClass("press");
		$(".subs").hide();
		$("#left").hide(400);
		$("#left").show(800);
		$("#item").show(800);
	});
	$("#button3").click(function(){
		$actbtn.removeClass("press").addClass("main");
		$actbtn = $(this).removeClass("main").addClass("press");
		$(".subs").hide();
		$("#left").hide(400);
		$("#left").show(800);
		$("#song").show(800);
	});
	$("#header,#content").click(function(){
		$("#left").hide(400);
		$actbtn.removeClass("press").addClass("main");
	});
});
