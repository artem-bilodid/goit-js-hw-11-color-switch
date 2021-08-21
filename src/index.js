const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const ARRAY_START_INDEX = 0;
const colorsLength = colors.length;
const COLOR_CHANGE_INTERVAL = 1000;

let isStarted = false;
let intervalId = null;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomBodyColor = () => {
  const randomIndex = randomIntegerFromInterval(ARRAY_START_INDEX, colorsLength);
  bodyEl.style.backgroundColor = colors[randomIndex];
};

const onStartBtnClick = () => {
  if (isStarted) return;

  isStarted = true;

  intervalId = setInterval(setRandomBodyColor, COLOR_CHANGE_INTERVAL);
};

const onStopBtnClick = () => {
  isStarted = false;
  clearInterval(intervalId);
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
