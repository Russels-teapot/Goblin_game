// TODO: write code here
import GoblinGame from './GoblinGame';

const gameBoard = document.querySelector('.gameboard');
const winCounter = document.querySelector('.counter__number_win');
const looseCounter = document.querySelector('.counter__number_loose');
const goblinGame = new GoblinGame(gameBoard, winCounter, looseCounter);
goblinGame.createCounters();
goblinGame.startGame();
