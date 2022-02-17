const counterValueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
let counter = 0;
const increment = incrementBtnRef.addEventListener("click", () => {
  counter += 1;
  return (counterValueRef.textContent = counter);
});
const decrement = decrementBtnRef.addEventListener("click", () => {
  counter -= 1;
  return (counterValueRef.textContent = counter);
});
