const btn = document.getElementById("button");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
  return randomNum;
};
let button = () => {
  let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  document.body.style.backgroundColor = randomColor;
};
btn.addEventListener("click", button);
window.addEventListener("load", button);