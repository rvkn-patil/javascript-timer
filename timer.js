"use strict";

let hour = 0;
let minute = 0;
let second = 0;

let time;

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function timer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
}

function start() {
  pause();
  time = setInterval(() => {
    timer();
  }, 1000);
}

function pause() {
  clearInterval(time);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
}

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
