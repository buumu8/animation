const button = document.querySelector(".button");
const buttonBorder = button.querySelectorAll(".button__border");
const distance = 10;

function borderMove(event) {
  const width = button.offsetWidth;
  const height = button.offsetHeight;

  const { offsetX: x, offsetY: y } = event;

  const xDistance = (x / width) * distance - distance / 2;
  const yDistance = (y / height) * distance - distance / 2;

  buttonBorder[0].style.transform = `
      translate(${-xDistance}px, ${yDistance}px)
    `;

  buttonBorder[1].style.transform = `
      translate(${xDistance}px, ${-yDistance}px)
    `;
}

function borderReset() {
  buttonBorder[0].style.transform = `
      translate(0px,0px)
    `;

  buttonBorder[1].style.transform = `
      translate(0px,0px)
    `;
}

button.addEventListener("mousemove", borderMove);
button.addEventListener("mouseleave", borderReset);
