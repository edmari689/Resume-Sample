//Section for scrolling to the top
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
	left: 0,
    top: element.offsetTop //offsetTop returns the top position (in pixels) relative to the top of the offsetParent element
  });
}

var goUp = document.querySelector(".topLink"); 
var topHead = document.getElementById("headArea");
goUp.addEventListener('click', () => {
  scrollTo(topHead); //goes to the specific div by clicking the link
});


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
