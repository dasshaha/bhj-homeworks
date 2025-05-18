const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;
let gameTimer;

const resetGame = () => {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
    clearInterval(gameTimer);
    startGameTimer();
};

const checkEndGame  = () => {

    if (dead >= 10) {
        alert('Вы победили');
        resetGame();

    } else if (lost >= 5) {
        alert('Вы проиграли');
        resetGame();
    }
};

const incrementLost = () => {
    lost++;
    lostCounter.textContent = lost;
    checkEndGame();
};

const startGameTimer= () => {
    gameTimer = setInterval(incrementLost, 1000);
};

holes.forEach(hole => {

    hole.addEventListener('click', () => {
        clearInterval(gameTimer);
        startGameTimer();

        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;
            hole.classList.remove('hole_has-mole');
            checkEndGame();
        } else {
        }
    });
});

startGameTimer();        