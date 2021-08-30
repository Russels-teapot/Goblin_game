import getRandomCell from './GetRandomCell';

export default function changeCell() {
  const activeCell = document.querySelector('.gameboard__cell_active');
  const newCell = getRandomCell();
  do {
    getRandomCell();
  } while (newCell === activeCell);
  activeCell.classList.remove('gameboard__cell_active');
  newCell.classList.add('gameboard__cell_active');
}
