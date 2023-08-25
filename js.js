const menuIcon = document.getElementById("menuIcon");
const menuContent = document.getElementById("menuContent");
const closeButton = document.getElementById("closeButton");

menuIcon.addEventListener("click", () => {
  menuContent.style.display = "block";
});

closeButton.addEventListener("click", () => {
  menuContent.style.display = "none";
});

