import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const button = document.querySelector('button');

flatpickr('input#datetime-picker', options);

editAttribute(button,'disabled', '')

function editAttribute(elem, name, value) {
  if(elem.hasAttribute(name)){
    elem.removeAttribute(name); 
  } else {
    elem.setAttribute(name, value)
  }
}