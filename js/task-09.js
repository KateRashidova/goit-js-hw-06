function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const colorRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
buttonRef.addEventListener("click", onButtonClick);

function onButtonClick() {
  bodyRef.setAttribute("style", `background-color: ${getRandomHexColor()}`);
  colorRef.textContent = bodyRef.style.backgroundColor;
}
