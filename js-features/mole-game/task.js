(() => {
  let playing = true;
  let activeHole = 1;
  let molesKilled = 0;
  let molesLost = 0;

  const deadSpan = document.getElementById('dead');
  const lostSpan = document.getElementById('lost');

  const stop = () => { playing = false; };
  const getHole = index => document.getElementById(`hole${index}`);
  const deactivateHole = index => getHole(index).className = 'hole';
  const activateHole = index => getHole(index).className = 'hole hole_has_mole';

  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', () => {
      if (hole.classList.contains('hole_has_mole')) {
        molesKilled++;
        deadSpan.textContent = molesKilled;
        deactivateHole(i);

        if (molesKilled >= 10) {
          alert('Вы победили!');
          stop();
        }
      } else {
        if(playing){
          molesLost++;
          lostSpan.textContent = molesLost;
          if (molesLost >= 5) {
            alert('Вы проиграли!');
            stop();
          }
        }
      }
    });
  }

  const next = () => {
    if (!playing) {
      return;
    }

    deactivateHole(activeHole);
    activeHole = Math.floor(1 + Math.random() * 9);
    activateHole(activeHole);

    setTimeout(next, 800);
  };

  next();
})();