function scrollFade() {
  const texts = document.querySelectorAll(".intro__text");

  texts.forEach((text) => {
    const textPosition = text.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (textPosition < windowHeight - 200) {
      text.classList.add("intro__text--active");

      console.log(textPosition < windowHeight);
    } else {
      if (text.classList.contains("intro__text--active")) {
        text.classList.remove("intro__text--active");
      }
    }
  });
}

window.addEventListener("scroll", scrollFade);
