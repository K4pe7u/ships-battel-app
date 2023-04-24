import { Battleship, HORIZONTAL, VERTICAL } from "./Battleship";

const ROWS = 10;
const COLUMNS = 10;

const battleshipEl = document.getElementById("battleship");
const battleship = new Battleship(ROWS, COLUMNS);

battleship.addShip(1, 1, HORIZONTAL, 4);
battleship.addShip(5, 3, HORIZONTAL, 3);

const board = battleship.board.map((row, rowIndex) => {
  const rowEl = document.createElement("div");
  rowEl.classList.add("row");

  rowEl.innerHTML = row
    .map((column, columnIndex) => {
      return `<div class="cell">${battleship.board[rowIndex][columnIndex]}</div>`;
    })
    .join("");
  return rowEl;
});

battleshipEl.append(...board);
