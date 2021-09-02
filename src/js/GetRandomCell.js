export default function getRandomCell() {
  const gameCells = document.querySelectorAll('.gameboard__cell');
  let randomCell = gameCells[Math.round(gameCells.length * Math.random())];
  while (!randomCell) {
    randomCell = gameCells[Math.round(gameCells.length * Math.random())];
  }
  return randomCell;
}
