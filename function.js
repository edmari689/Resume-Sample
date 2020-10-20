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