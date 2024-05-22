const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', function () {
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomColor();
  }, 1000);

  startButton.disabled = true;
});

stopButton.addEventListener('click', function () {
  clearInterval(intervalId);
  document.body.style.backgroundColor = '';
  startButton.disabled = false;
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
