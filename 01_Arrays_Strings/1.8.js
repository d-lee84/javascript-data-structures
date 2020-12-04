"use strict";

/** Problem 1.8: Zero Matrix
 *  - For a given M x N matrix, if an element is 0
 *    set its entire row and column to 0
 */

function zeroMatrix(matrix) {
  // Use the matrix itself to know which col and rows
  // we need to change. 

  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let rowHasZero = false;
  let colHasZero = false;

  // Check if first row has any zeros;
  for (let col = 1; col < colLen; col++) {
    if (matrix[0][col] === 0) {
      rowHasZero = true;
    }
  }

  // Check if the first col has any zeros;
  for (let row = 1; row < rowLen; row++) {
    if (matrix[row][0] === 0) {
      colHasZero = true;
    }
  }

  // Check for zeros and mark them through the array
  for (let row = 1; row < rowLen; row++) {
    for (let col = 1; col < colLen; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // Replace rows
  for (let row = 1; row < rowLen; row++) {
    if (matrix[row][0] === 0) {
      matrix[row] = Array(colLen).fill(0);
    }
  }

  // Replace columns
  for (let col = 1; col < colLen; col++) {
    if (matrix[0][col] === 0) {
      // Change the entire column
      for (let row = 0; row < rowLen; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  // Change first row if necessary
  if (rowHasZero) {
    for (let col = 0; col < colLen; col++) {
      matrix[0][col] = 0;
    }
  }


  // Change first col if necessary
  if (colHasZero) {
    for (let row = 0; row < rowLen; row++) {
      matrix[row][0] = 0;
    }
  }


  return matrix;
}


let matrix = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

console.log(zeroMatrix(matrix));


[
  [0, 1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1]
]