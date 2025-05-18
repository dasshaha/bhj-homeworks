const cookie = document.getElementById("cookie");
const clickCountDisplay = document.getElementById("clicker__counter");
let clickCount = 0;
let isBig = true;

cookie.addEventListener("click", () => {
  clickCount++;
  clickCountDisplay.textContent = clickCount;

  if (isBig) {
    cookie.style.width = "220px";
    cookie.style.height = "140px";
    isBig = false;
  } else {
    cookie.style.width = "240px";
    cookie.style.height = "150px";
    isBig = true;
  }
});
