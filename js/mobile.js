jQuery(document).ready(function($) {
  $(document).bind("click", function (e) {
	$(".floating-menu").css("display","none");
  });

  $("a.corner-menu").click(function (e) {
	  if ($(".floating-menu").css("display") != "block") {
		  $(".floating-menu").css("display", "block");
	  } else {
		  $(".floating-menu").css("display", "none");
	  }
	  return false;
  });
  
   $(".floating-menu").click(function(e) {
		e.stopPropagation();
   });
});
