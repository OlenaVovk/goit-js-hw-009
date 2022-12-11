import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector('button');
const daySpan = document.querySelector('span[data-days]');
const hourSpan = document.querySelector('span[data-hours]');
const minSpan = document.querySelector('span[data-minutes]');
const secSpan = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const currentDate = new Date();
    if (selectedDates[0] < currentDate) {
      window.alert("Please choose a date in the future");
      addDisabled(button);
    } else {
      removeDisabled(button);

      button.addEventListener('click', () => {
        setInterval(() => {
        const delta = selectedDates[0] - new Date()
        const time = convertMs(delta);
        updateTimerFace(time);
        
      }, 1000 )
});
    }
  },
};

addDisabled(button);
flatpickr('input#datetime-picker', options);





function addDisabled (elem) {
  elem.setAttribute('disabled', '')
}

function removeDisabled (elem) {
  elem.removeAttribute('disabled');
}

function addLeadingZero (value) {
  return value.padStart(2, '0');
}

function convertMs (ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerFace ({ days, hours, minutes, seconds }) {
  daySpan.textContent = addLeadingZero(`${days}`);
  hourSpan.textContent = addLeadingZero( `${hours}`);
  minSpan.textContent = addLeadingZero(`${minutes}`);
  secSpan.textContent = addLeadingZero(`${seconds}`);
}