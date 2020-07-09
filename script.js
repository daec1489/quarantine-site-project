let loader = document.getElementById("overlay");

window.addEventListener("load", function () {
  setTimeout(function () {
    overlay.style.display = "none";
  }, 2000);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0";
}
