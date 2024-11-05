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
  let Queue = [[startNode, path]];
  while (Queue.length >= 1) {
    const [node, path] = Queue.shift();
    for (let [row, column] of node.moves) {
      if (row === endRow && column === endColumn) {
        const finalPath = [...path, [row, column]];
        console.log(`You made it in ${path.length} moves!  Here's your path:`);
        finalPath.forEach((element) => {
          console.log(element);
        });
        return path;
      }
      Queue.push([
        new Node([row, column]),
        [...path, [row, column]],
      ]);
    }
  }
}
knightMoves([3, 3], [4, 3]);
