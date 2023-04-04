const popup = document.querySelector(".add-btn");
const popupBox = document.querySelector(".popup-box");
const overlay = document.querySelector(".overlay");
const exitOverlay = document.querySelector(".exit-popup");
popup.addEventListener("click", () => {
  popupBox.classList.add("show-popup");
  overlay.classList.add("show-overlay");
  console.log(popupBox);
  console.log(overlay);
});

exitOverlay.addEventListener("click", () => {
  popupBox.classList.remove("show-popup");
  overlay.classList.remove("show-overlay");
  console.log(popupBox);
  console.log(overlay);
});
