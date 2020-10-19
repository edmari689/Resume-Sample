function scrollingTop() {
  const y = window.scrollY;
  if(y > 0){
    window.requestAnimationFrame(scrollingTop);
    window.scrollTo(0, y - y / 30);
  }
}

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".toFadeIn").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
      } 
    });
  }).scroll(); 
});
