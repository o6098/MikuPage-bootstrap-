$(function(){
	var $bpho = $(".bpho img");
	var $src;
	$(".spho img").click(function(){
		$src = $(this).attr("src");
		$bpho.attr("src",$src);

	});
	/*$("#spho2").click(function(){
		$("#bpho li").hide();
		$("#bpho2").show();
	});
	$("#spho3").click(function(){
		$("#bpho li").hide();
		$("#bpho3").show();
	});
	$("#spho4").click(function(){
		$("#bpho li").hide();
		$("#bpho4").show();
	});
	$("#spho5").click(function(){
		$("#bpho li").hide();
		$("#bpho5").show();
	});
	$("#spho1").click(function(){
		$("#bpho li").hide();
		$("#bpho1").show();
	});*/
});
