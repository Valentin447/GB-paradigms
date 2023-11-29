"use strict";

// Использованы парадигмы:
// Структурная. Так как есть циклы и нет goto
// ООП.  Есть класс GameBoard.
// Деклоративная. Так как есть встроенный метод addEventListener

const buttonEl = document.querySelector(".button");
buttonEl.classList.add("start");
buttonEl.addEventListener("click", ()=>{
  if(buttonEl.classList.contains("start")){
    buttonEl.hidden = true;
    gameBoard.init();
  }
});

class GameBoard{
  gameBoardEl = document.querySelector(".game-board");
  player1El = document.querySelector(".player1__lable");
  player2El = document.querySelector(".player2__lable");
  gameBoardArr;
  currentPlayer;
  
  init(){
    this.gameBoardArr = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    this.currentPlayer = 1;
    const squaresEl = this.gameBoardEl.querySelectorAll(".game-board__square");
    this.player1El.classList.remove("win", "hidden");
    this.player2El.classList.remove("win");
    this.player2El.classList.add("hidden");
    for (let i = 0; i < squaresEl.length; i++) {
      squaresEl[i].textContent = "";
      this.player1El.textContent = "Ход игрока № 1";
      this.player2El.textContent = "Ход игрока № 2";
      squaresEl[i].addEventListener("click", ()=>{
        if(squaresEl[i].textContent !== ""){
          return undefined;
        }
        this.putSymbol(squaresEl[i]);
        this.changeGameBoardArr(i);
      });
    }
  }

  putSymbol(squareEl){
    if(this.currentPlayer === 1){
      squareEl.textContent = "X";
      this.currentPlayer = 2;
      this.player1El.classList.add("hidden");
      this.player2El.classList.remove("hidden");
    } else {
      squareEl.textContent = "O";
      this.currentPlayer = 1;
      this.player2El.classList.add("hidden");
      this.player1El.classList.remove("hidden");
    }
  }

  changeGameBoardArr(i){
    let number = 0;
    if(this.currentPlayer === 1){
      number = 1;
    } else {
      number = 10;
    }
    this.gameBoardArr[Math.floor(i / 3)][i % 3] = number;
    this.check();
  }

  check(){
    let sumColumn = 0;
    let sumRow = 0;
    let sumD1 = 0;
    let sumD2 = 0;
    let draw = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        sumColumn += this.gameBoardArr[j][i];
        sumRow += this.gameBoardArr[i][j];
        if(i === j){
          sumD1 += this.gameBoardArr[i][j];
        }
        if(2 - j === i){
          sumD2 += this.gameBoardArr[i][j];
        }
        if(this.gameBoardArr[i][j] === 0){
          draw = false;
        }
      }
      if(sumColumn === 3 || sumRow === 3){
        this.win(1);
        return 1;
      } else if(sumColumn === 30 || sumRow === 30){
        this.win(2);
        return 2;
      }
      sumColumn = 0;
      sumRow = 0;
    }
    if(sumD1 === 3 || sumD2 === 3){
      this.win(1);
    } else if(sumD1 === 30 || sumD2 === 30){
      this.win(2);
    } else if(draw){
      this.draw();
    }

    return 0;
  }
  win(playerNumber){
    if(playerNumber === 2){
      this.player2El.classList.add("hidden");
      this.player1El.classList.remove("hidden");
      this.player1El.textContent = "Игрок № 1 победил!";
      this.player1El.classList.add("win");
    } else {
      this.player1El.classList.add("hidden");
      this.player2El.classList.remove("hidden");
      this.player2El.textContent = "Игрок № 2 победил!";
      this.player2El.classList.add("win");
    }
    this.stopGame();
  }
  draw(){
    this.player1El.classList.remove("hidden");
    this.player2El.classList.remove("hidden");
    this.player1El.textContent = "Ничья";
    this.player2El.textContent = "Ничья";
    this.stopGame();
  }
  stopGame(){
    buttonEl.hidden = false;
    buttonEl.textContent = "Ещё раз";
  }
}

const gameBoard = new GameBoard();

