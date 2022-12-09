function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('[data-stop]');
console.log(stopBtn);
const body = document.querySelector('body');
console.log(body);

let IntervalId = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick (){
    console.log("start");
    //stopBtn.removeAttribute(disabled);
    IntervalId = setInterval(() => {
       body.style.backgroundColor = getRandomHexColor();
       }, 1000)
}

function onStopClick (){
    clearInterval(IntervalId);
    console.log("stop");
    body.style.backgroundColor = '#fff';
}