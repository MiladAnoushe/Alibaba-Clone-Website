
window.addEventListener("scroll", function () {
  const header = document.getElementById("header-container");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var buttons = document.querySelectorAll(".navbar-dropdown-button");

buttons.forEach(function (button) {
  var dropdown = button.querySelector(".navbar-div-dropdown");

  button.addEventListener("click", function () {
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".desktop-navbar-services");
  const underline = container.querySelector(".underline");
  const items = container.querySelectorAll(".item");

  function moveUnderline(el) {
    underline.style.width = el.offsetWidth + "px";
    underline.style.left = el.offsetLeft + "px";
  }

  items.forEach(i => {
    i.addEventListener("click", e => {
      e.preventDefault();

      items.forEach(x => x.classList.remove("active-tab"));
      
      i.classList.add("active-tab");

      moveUnderline(i);
    });
  });

  moveUnderline(container.querySelector(".active-tab"));
});




