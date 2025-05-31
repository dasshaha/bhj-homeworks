const cookie = document.getElementById("cookie")
const clickerCounter = document.getElementById("clicker__counter")

let clickCount = 0;
let isBig = true;

cookie.onclick = function() {
  clickCount++;
  
  clickerCounter.textContent = clickCount;

  if (isBig) {
    cookie.width = 200;
  } else {
    cookie.width = 250;
  }

  isBig = !isBig
};