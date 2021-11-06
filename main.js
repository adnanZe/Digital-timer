const displayTimer = document.getElementById('timer');
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const saveTimerBtn = document.getElementById('saveTimer');
const mainContainer = document.querySelector('main');

const createUList = document.createElement('ul');
mainContainer.append(createUList);

// Functionality for start timer
startTimerBtn.addEventListener('click' , startTimer);

// Functionality for stop timer
stopTimerBtn.addEventListener('click', stopTimer);

// Functionality for reset timer
resetTimerBtn.addEventListener('click', resetTimer);

// Functionality for save timer
saveTimerBtn.addEventListener('click', saveTimer);

// Display start like this: '00:00:00'
displayTimer.innerHTML = '00:00:00';

// Timer functionality
let second = 0;
let minute = 0;
let hour = 0;
let flagStopTime = true;

function startTimer() {
  if(flagStopTime == true){
    flagStopTime = false;
    timeIncremment();
  }
}

function stopTimer() {
  if(flagStopTime == false){
    flagStopTime = true;
  }
}

function timeIncremment() {
  if(flagStopTime == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second++;

    if(second == 60) {
      minute++;
      second = 0;
    }
    if(minute == 60){
      hour++;
      minute = 0;
      second = 0;
    }
    if (second < 10 || second == 0) {
      second = '0' + second;
    }
    if (minute < 10 || minute == 0) {
      minute = '0' + minute;
    }
    if (hour < 10 || hour == 0) {
      hour = '0' + hour;
    }

    displayTimer.innerHTML = hour + ':' + minute + ':' + second;

    // Update in every seconds provided by browser
    setTimeout(timeIncremment, 1000);
  }
}

function resetTimer() {
    displayTimer.innerHTML = '00:00:00';
    hour, minute, second = 0;
}

function saveTimer() {
  const createList = document.createElement('li');
  createUList.appendChild(createList);
  createList.innerHTML = displayTimer.innerHTML;
}