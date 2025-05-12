const cookie = document.getElementById("cookie");
const clickCountDisplay = document.getElementById("clicker_counter");
let clickCount = 0;
let isBig = true;

cookie.addEventListener("click", () => {
  clickCount++;
  clickCountDisplay.textContent = clickCount;

  if (isBig) {
    cookie.style.width = "180px";
    cookie.style.height = "180px";
    isBig = false;
  } else {
    cookie.style.width = "200px";
    cookie.style.height = "200px";
    isBig = true;
  }
});
