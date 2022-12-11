const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let IntervalId = null;

editAttribute(stopBtn, 'disabled', '');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick (){
  console.log("start");
    
  editAttribute(stopBtn, 'disabled', '');
  editAttribute(startBtn, 'disabled', '');

  IntervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000)
}

function onStopClick (){
  editAttribute(startBtn, 'disabled', '');
  editAttribute(stopBtn, 'disabled', '');
  
  clearInterval(IntervalId);
  console.log("stop");
  body.style.backgroundColor = '#fff';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function editAttribute(elem, name, value) {
  if(elem.hasAttribute(name)){
    elem.removeAttribute(name); 
  } else {
    elem.setAttribute(name, value)
  }
}