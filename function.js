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