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




