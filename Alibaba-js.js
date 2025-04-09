
window.addEventListener("scroll", function () {
  const header = document.getElementById("header-container");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var buttons = document.querySelectorAll(".navbar-dropdown-button");

buttons.forEach(function(button) {
  var dropdown = button.querySelector(".navbar-div-dropdown");

  button.addEventListener("click", function() {
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  });
});