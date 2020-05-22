window.onscroll = function () {
  stickyNav();
};

var navbar = document.querySelector(".header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

module.exports = stickyNav;
