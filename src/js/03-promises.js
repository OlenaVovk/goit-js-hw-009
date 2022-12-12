function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const form = document.querySelector('form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button');
const amount = amountInput.value;
form.addEventListener('submmit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault;
 //for (let i = 0; i < amount; i++) {
  //createPromise;
  console.log(amount);
  
 //}
  
 }








//createPromise(2, 1500)
//  .then(({ position, delay }) => {
//    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//  })
//  .catch(({ position, delay }) => {
//    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//  });