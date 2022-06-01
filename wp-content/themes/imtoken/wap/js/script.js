$(function () {
	var windoww = $(window).width();
	$('.sp_nav').click(function () {
		$('.sp_nav').toggleClass('sp_nav_se');
		$('.sjj_nav').toggleClass('nav_show');
	});
	
	$('.sjj_nav ul li i').click(function () {
		$(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
		$(this).toggleClass('sjj_nav_i_se');
		$(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
	});
	
	$('.sp_nav_xjb').html('<img src="wp-content/themes/imtoken/static/images/x.png">');
	
});



 
	function t4(){		
  if(document.getElementById("rrr2").style.display=="block"){
  document.getElementById("rrr2").style.display="none";
 }else{
  document.getElementById("rrr2").style.display="block";
 };
 
  if(document.getElementById("rrr2").style.display=="block"){
  document.getElementById("rrr1").style.display="none";
 }else{
  document.getElementById("rrr1").style.display="block";
 };
  document.getElementById("rrr3").style.display="none";
  };
  
 	function t3(){		
   if(document.getElementById("rrr3").style.display=="block"){
  document.getElementById("rrr3").style.display="none";
 }else{
  document.getElementById("rrr3").style.display="block";
 };
 
  };
 
  
 