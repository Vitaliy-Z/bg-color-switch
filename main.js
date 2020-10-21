const ref = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]')
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

ref.start.addEventListener('click', onClickStart)
ref.stop.addEventListener('click', onClickStop)

function changeBodyColor () {
    ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)]
} 

function onClickStart() {
   ref.start.disabled = true
    return intervalColorChange = setInterval(changeBodyColor, 1000)
}

function onClickStop() {
       ref.start.disabled = false
    clearInterval(intervalColorChange)
}