let root = document.querySelector(":root");
let button = document.querySelector("button");

button.addEventListener('click', () => {
  event.preventDefault();
  root.classList.toggle('dark');
})