let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timerInterval = null;
let isRunning = false;

const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayMilliseconds = document.getElementById("milliseconds");
const lapList = document.getElementById("lap-list");

// Function to update the stopwatch display
function updateDisplay() {
  displayHours.textContent = hours.toString().padStart(2, "0");
  displayMinutes.textContent = minutes.toString().padStart(2, "0");
  displaySeconds.textContent = seconds.toString().padStart(2, "0");
  displayMilliseconds.textContent = milliseconds.toString().padStart(2, "0");
}

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      milliseconds += 10;
      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10);
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapList.innerHTML = ""; // Clear laps
}

// Function to record a lap time
function recordLap() {
  if (isRunning) {
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
    lapList.appendChild(lapItem);
  }
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("pause").addEventListener("click", pauseStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
document.getElementById("lap").addEventListener("click", recordLap);

// Initialize display
updateDisplay();
