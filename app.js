const button = document.querySelector('.button');
const adviceText = document.querySelector('.text');
const adviceNumber = document.querySelector('.number');

function updateAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.slip_id;
      adviceText.textContent = `"${advice}"`;
      adviceNumber.textContent = adviceId;
      const newNumber = Math.floor(Math.random() * 1000) + 1;
      adviceNumber.textContent = newNumber;
    });
}

button.addEventListener('click', updateAdvice);
