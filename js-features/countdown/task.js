const timerStart = 40;
let timeLeft = timerStart;
const timerElement = document.getElementById("timer");

function updateTimer() {
  timeLeft--;

  timerElement.textContent = timeLeft + " секунд";

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
  }
}

const timerInterval = setInterval(updateTimer, 1000);
