let nameColor = document.querySelector("h1");

const generateColor = () => {
  const colorRandom = {
    color1: Math.floor(Math.random() * 235),
    color2: Math.floor(Math.random() * 235),
    color3: Math.floor(Math.random() * 235),
  };
  let { color1, color2, color3 } = colorRandom;
  let rgbInit = `RGB(${color1}, ${color2}, ${color3})`;
  nameColor.textContent = rgbInit;
  document.body.style.background = rgbInit;
};
let startInterval = setInterval(() => {
  generateColor();
}, 1000);
generateColor();

window.addEventListener("click", () => {
  clearInterval(startInterval);
  alert("STOP RANDOM COLOR");
});
