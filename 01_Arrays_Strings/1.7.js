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