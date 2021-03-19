/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

const goCorgiGo = () => {
  const start = document.getElementById('start');
  const reset = document.getElementById('reset');
  const stop = document.getElementById('stop');
  const dog = document.getElementById('player');
  const coin = document.getElementById('coin');

  let countTop = 0;
  let countLeft = 0;

  dog.style.cssText = `
  position: absolute;
  top: 0px;
  left: 100px;
  width: 80px;`;

  coin.style.cssText = `
    position: absolute;
    top: 200px;
    left: 200px;
    width: 80px;`;

  let superCorgi;
  const corgiMove = () => {

    superCorgi = requestAnimationFrame(corgiMove);

    const moveCoin = () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      this.coin.style.left = `${x}px`;
      this.coin.style.top = `${y}px`;
      dog.style.cssText = `
      position: absolute;
      top: 0px;
      left: 100px;
      width: 80px;`;
      dog.src = 'img/runs.gif';
      countLeft = 0;
      countTop = 0;
    };

    countTop++;
    countLeft++;

    const happyCorgi = () => {
      dog.src = 'img/sits.gif';
    };

    reset.addEventListener('click', () =>{
      moveCoin();
    });


    if (countLeft < 10000) {
      dog.style.left = countLeft + 'px';
      if (dog.style.left === coin.style.left) {
        countLeft = 10000;
        if (dog.style.left === coin.style.left && dog.style.top === coin.style.top) {
          happyCorgi();
          setTimeout(moveCoin, 1000);
        }
      }
    }

    if (countTop < 10000) {
      dog.style.top = countTop + 'px';
      if (dog.style.top === coin.style.top) {
        countTop = 10000;
        if (dog.style.left === coin.style.left && dog.style.top === coin.style.top) {
          happyCorgi();
          setTimeout(moveCoin, 1000);
        }
      }
    }
  };

  start.addEventListener('click', () => {
    superCorgi = requestAnimationFrame(corgiMove);
  });

  stop.addEventListener('click', () => {
    cancelAnimationFrame(superCorgi);
  });
};

goCorgiGo();