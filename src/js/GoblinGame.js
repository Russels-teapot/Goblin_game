import changeCell from './ChangeCell';
import getRandomCell from './GetRandomCell';

export default class GoblinGame {
  constructor(board, winCounter, looseCounter) {
    this.board = board;
    this.winCounter = winCounter;
    this.looseCounter = looseCounter;
  }

  startGame() {
    const randomCell = getRandomCell();
    randomCell.classList.add('gameboard__cell_active');
    setInterval(changeCell, 1000);
  }

  clearCounters() {
    this.winCounter.innerText = 0;
    this.looseCounter.innerText = 0;
  }

  createCounters() {
    this.board.addEventListener('click', (e) => {
      const chosenCell = e.target;
      if (chosenCell.classList.contains('gameboard__cell_active')) {
        this.winCounter.innerText = +this.winCounter.innerText + 1;
        changeCell();
      } else {
        this.looseCounter.innerText = +this.looseCounter.innerText + 1;
        changeCell();
      }
      if (+this.looseCounter.innerText === 5) {
        this.clearCounters();
        alert('Вы проиграли');
      }
    });
  }
}
