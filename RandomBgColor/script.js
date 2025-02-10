const randomColor = () => {
  let color = "#";
  let hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let timer;
const startChangeBg = () => {
  timer = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 100);
};

const stopChangeBg = () => {
  clearInterval(timer);
};
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
start.addEventListener("click", startChangeBg);
stop.addEventListener("click", stopChangeBg);
