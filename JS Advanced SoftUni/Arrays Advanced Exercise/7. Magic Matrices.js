function isMagical(matrix) {
  let sum = matrix[0].reduce((acc, cur) => acc + cur);

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((acc, cur) => acc + cur);
    if (rowSum !== sum) {
      return false;
    }

    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }
    if (colSum !== sum) {
      return false;
    }
  }

  return true;
}

console.log(
  isMagical([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ])
);

const matrix2 = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 9],
];
console.log(isMagical(matrix2));
