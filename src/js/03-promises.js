import Notiflix from 'notiflix';


function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve ({position, delay});
        } else {
          reject ({position, delay});
        }
      }, delay);
  })
 } 
  
const form = document.querySelector('form');

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const {elements: {delay, step, amount }} = event.currentTarget;
  //console.log(delay.value, step.value, amount.value);
  let time = parseInt(delay.value);
  for (let i = 1; i <= parseInt(amount.value); i++) {
    if (i === 1) {
      time = parseInt(delay.value);
    } else {
       time = time + parseInt(step.value);
    }
    //console.log(time);
    const myPromise = createPromise(i, time)
    myPromise
      .then(({ position, delay }) => {
      //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
  event.currentTarget.reset();
}


