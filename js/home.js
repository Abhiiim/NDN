window.onscroll = function() {
  var navbar = document.querySelector(".navigation-bar");

  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "#52ffea"; /* make the background opaque */
  } else {
    navbar.style.backgroundColor = "rgba(51, 51, 51, 0)"; /* make the background transparent */
  }
};

// Dropdown Menu Start
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
// Dropdown Menu getElementById
