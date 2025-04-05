
window.addEventListener("scroll", function () {
  const header = document.getElementById("header-container");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const ads = document.querySelectorAll('.ad-section > div');
  let currentIndex = 0;

  ads.forEach((ad, index) => {
    ad.style.display = (index === 0) ? "block" : "none";
  });

  function changeAd() {
    ads[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % ads.length;
    ads[currentIndex].style.display = "block";
  }
  
  setInterval(changeAd, 4000);
});
