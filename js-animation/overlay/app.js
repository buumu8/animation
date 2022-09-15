const button = document.querySelector(".button");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  overlay.classList.toggle("overlay--active");
});

overlay.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (
    clickedElement.classList.contains("overlay") ||
    clickedElement.classList.contains("overlay__close")
  )
    overlay.classList.toggle("overlay--active");
});
