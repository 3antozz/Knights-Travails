class Node {
  constructor([row, column]) {
    this.row = row;
    this.column = column;
    this.moves = this.possibleMoves();
  }

  isValid([row, column]) {
    return row >= 0 && row < 8 && column >= 0 && column < 8;
  }

  possibleMoves() {
    const directions = [
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [-2, 1],
      [-2, -1],
    ];
    return directions
      .map(([dr, dc]) => [dr + this.row, dc + this.column])
      .filter(([row, column]) => this.isValid([row, column]));
  }
}

function knightMoves([startRow, startColumn], [endRow, endColumn]) {
  if (startRow === endRow && startColumn === endColumn) {
    return 0;
  }
  const startNode = new Node([startRow, startColumn]);
  const path = [[startRow, startColumn]];
  let Queue = [[startNode, 0, path]];
  while (Queue.length >= 1) {
    const [node, movesCount, path] = Queue.shift();
    for (let [row, column] of node.moves) {
      if (row === endRow && column === endColumn) {
        console.log(`You made it in ${path.length} moves!  Here's your path:`);
        path.forEach((element) => {
          console.log(element);
        });
        console.log([row, column]);
        return path;
      }
      Queue.push([
        new Node([row, column]),
        movesCount + 1,
        [...path, [row, column]],
      ]);
    }
  }
}
knightMoves([3, 3], [4, 3]);
