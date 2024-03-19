//count-down timer
const iFrameContainer = document.getElementById("main-video");
const startingMinutes = 0.5;
let time = startingMinutes * 60;
const countdownTimer = document.getElementById("timer");
const countdownContainer = document.getElementById("timer-wraper");

const countDown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownTimer.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  time--;

  if (seconds <= 10) {
    if (seconds % 2 == 1) {
      countdownTimer.style.color = "#da4c50";
    } else {
      countdownTimer.style.color = "#f1ddd9";
    }
  } else {
    countdownTimer.style.color = "#362aef";
  }

  if (minutes == 0 && seconds == 0) {
    iFrameContainer.style.opacity = "1";
    countdownContainer.style.display = "none";
  }
};

setInterval(countDown, 1000);
