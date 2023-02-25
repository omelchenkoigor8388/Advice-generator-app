const button = document.querySelector('.button');
const advice = document.querySelector('.text');

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      advice.innerText = `"${data.slip.advice}"`;
    })
    .catch(error => console.error(error));
}

button.addEventListener('click', getAdvice);


