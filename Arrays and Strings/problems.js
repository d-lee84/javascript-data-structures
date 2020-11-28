/** 1.6 String Compression 
 *  - Compress a string of characters (A - Z & a - z) 
 *  - Return original string if the length of the compression is not
 *    less than the original string
 *  Ex:
 *  "aaaabbccccddeaaa" -> "a4b2c4d2e1a3"
 *  "abcdefghi" -> "abcdefghi" ("a1b1c1d1e1f1g1h1i1" is longer)
*/

// My version
function compressStr(str) {
  let compStr = "";
  let count = "";
  let char = "";

  for (let letter of str) {
    if (letter !== char) {
      compStr = compStr + char + count;
      char = letter;
      count = 1;
    } else { count++ }
  }

  // After the loop add the last char and count
  compStr = compStr + char + count;

  // Check that compStr length will be smaller
  if (compStr.length > str.length) {
    return str;
  }

  return compStr;
}



/** Book solution
 *  - Variable name update (count -> countConsec)
 *  - Change the condition to add the comp string
 */
function compressStrSolution(str) {
  let compStr = "";
  let countConsec = 0;

  for (let i = 0; i < str.length; i++) {
    countConsec++;

    // Check whether this is the last character or the next 
    // character is not the same as this one, if so add to the
    // compressed version of the string
    if (i + 1 > str.length || str[i] !== str[i + 1]) {
      compStr += str[i] + countConsec;
      countConsec = 0;
    }
  }


  // Check that compStr length will be smaller
  if (compStr.length > str.length) {
    return str;
  }

  return compStr;
}

console.log(compressStr("aaaabbccccddeaaa"));
console.log(compressStr(""));
console.log(compressStr("AAWWWWWWhiiiiii"));
console.log(compressStrSolution("aaaabbccccddeaaa"));
console.log(compressStrSolution(""));
console.log(compressStrSolution("AAWWWWWWhiiiiii"));




/** 1.7 Rotate Matrix
 *  - N x N matrix representing an image, each spot holds an integer
 *  - We want to rotate the image 90 degrees
 *  - [[1,0,0,0,2],
 *     [0,0,0,0,0]
 *     [0,0,0,0,0]
 *     [0,0,0,0,0]
 *     [4,0,0,0,3]]
 * 
 *    Becomes 
 *    [[4,0,0,0,1],
 *     [0,0,0,0,0]
 *     [0,0,0,0,0]
 *     [0,0,0,0,0]
 *     [3,0,0,0,2]]
 *  - We want to try to do it in place
 */

function rotateImage(imageArr) {
  let midPt = Math.floor(imageArr.length / 2);
  let n = imageArr.length - 1;

  for (let i = 0; i < midPt; i++) {
    for (let j = 0; j < midPt; j++) {
      [
        imageArr[i][j],
        imageArr[j][n - i],
        imageArr[n - i][n - j],
        imageArr[n - j][i]
      ] = [
          imageArr[n - j][i],
          imageArr[i][j],
          imageArr[j][n - i],
          imageArr[n - i][n - j]
        ]
    }
  }

  return imageArr;

}

/** Solution, work through it by layers */

function rotateImageSoln(imageArr) {
  // Check to make sure its not an empty array or not an N x N array
  if (imageArr.length === 0 || imageArr.length !== imageArr[0].length) return false;

  let n = imageArr.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;

      // Left Down Right Top -> Top, Left, Down, Right 
      [
        imageArr[first][i],
        imageArr[last - offset][first],
        imageArr[last][last - offset],
        imageArr[i][last]
      ] = [
          imageArr[last - offset][first],
          imageArr[last][last - offset],
          imageArr[i][last],
          imageArr[first][i]
        ]
    }
  }

  return imageArr;

}


let image = [
  [1, 0, 0, 0, 2, 0],
  [2, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 3, 0],
  [6, 0, 0, 0, 3, 0]
];

let image2 = [
  [1, 0, 0, 0, 2],
  [2, 0, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [4, 0, 0, 0, 0],
  [5, 0, 0, 0, 3],
];

rotateImageSoln(image);
rotateImageSoln(image2);


console.log(image);
console.log(image2);