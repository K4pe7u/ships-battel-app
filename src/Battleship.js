// pisane w klasie dlatego, żeby zrobić z tego logiczną całość
// tablica dwu wymiarowa -> tablica tablic [[],[],[]]
export const HORIZONTAL = "HORIZONTAL";
export const VERTICAL = "VERTICAL";

export class Battleship {
  constructor(rows, columns) {
    this.board = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    console.log(this.board);
  }

  addShip(row, column, direction, length) {
    for (let i = 0; i < length; i++) {
      if (direction === HORIZONTAL) {
        this.board[row][column + 1] = 1;
      } else if (direction === VERTICAL) {
        this.board[row + 1][column] = 1;
      }
    }
  }
}

// addShip(2, 2, "HORIZONTAL", 3);

// this.board(row)(column) = 1;
// this.board(row)(column + 1) = 1;
// this.board(row)(column + 1) = 1;

// addShip(2, 2, "VERTICAL", 3);

// this.board(row)(column) = 1;
// this.board(row + 1)(column) = 1;
// this.board(row + 1)(column) = 1;
