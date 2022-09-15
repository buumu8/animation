const burgers = document.querySelectorAll(".burger");

burgers.forEach((burger) => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });
});
