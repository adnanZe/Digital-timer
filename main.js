const displayTimer = document.getElementById('timer');
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const saveTimerBtn = document.getElementById('saveTimer');
const mainContainer = document.querySelector('main');

const createUList = document.createElement('ul');
mainContainer.append(createUList);

// Adaugati un button plus functionalitate pentru start timer
startTimerBtn.addEventListener('click' , startTimer);

// Adaugati un button plus functionalitate pentru stop timer
stopTimerBtn.addEventListener('click', stopTimer);

// Adaugati un button plus functionalitate pentru reset timer
resetTimerBtn.addEventListener('click', resetTimer);

// Adaugati un button plus functionalitate pentru save timer
saveTimerBtn.addEventListener('click', saveTimer);

// Vream sa afisam un timer in browser, va incepe cu 00:00:00
displayTimer.innerHTML = '00:00:00';

// functionalitatea timer-ului /stopwatch-ului
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

    // Sa se faca update in real time ( la fiecare secunda )
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