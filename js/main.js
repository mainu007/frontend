//topnav code start
function navbarChange() {
  let topnav = document.querySelector(".my_navbar");
  if (window.scrollY > 10) {
    if (!topnav.classList.contains("active_bg")) {
      topnav.classList.add("active_bg");
    }
  }
  if (window.scrollY === 0) {
    topnav.classList.remove("active_bg");
  }
}
window.addEventListener("scroll", navbarChange);
//topnav code end

// topnav scroll active
$("#myNavbar").onePageNav({
  currentClass: "menu_active",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing"
});
