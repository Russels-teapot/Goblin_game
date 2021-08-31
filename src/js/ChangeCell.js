import getRandomCell from './GetRandomCell';

export default function changeCell() {
  const activeCell = document.querySelector('.gameboard__cell_active');
  let newCell = getRandomCell();
  while (activeCell === newCell) {
    newCell = getRandomCell();
  }
  activeCell.classList.remove('gameboard__cell_active');
  newCell.classList.add('gameboard__cell_active');
}
