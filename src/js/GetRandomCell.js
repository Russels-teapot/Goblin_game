export default function getRandomCell() {
  const gameCells = document.querySelectorAll('.gameboard__cell');
  const randomCell = gameCells[Math.round(gameCells.length * Math.random())];
  return randomCell;
}
