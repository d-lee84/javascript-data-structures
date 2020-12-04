"use strict";


/** 1.9 String Rotation
 *  - You have string s1 and s2 and you want to 
 *    check if s2 could be formed by shifting the order
 *    of letters from s1
 *  - "waterbottle" -> "terbottlewa" True
 *  - "waterbottle" -> "ttlewaterbo" True
 *  - "waterbottle" -> "twletaterbo" False
 */

function substring(s1, s2) {
  let s1Len = s1.length;
  let s2Len = s2.length;

  if (s1Len !== s2Len) {
    return false;
  }

  for (let i = 0; i < s1Len; i++){
    if(substringHelper(s1, s2, i)){
      return true;
    }
  }

  return false;
}

function substringHelper(s1, s2, offset) {
  let n = s1.length

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[(i + offset) % n]) {
      return false;
    }
  }

  return true;
}

let s1 = "waterbottle"; 
let s2 = "terbottlewa";
let s3 = "ttlewaterbo";
let s4 = "twletaterbo";
let s5 = "hello"
let s6 = "elloh"
let s7 = ""

console.log(substring(s1, s2)); // true
console.log(substring(s1, s3)); // true
console.log(substring(s1, s4)); // false
console.log(substring(s1, s5)); // false
console.log(substring(s5, s6)); // true
console.log(substring(s7, s7)); // false
console.log(substring(s6, s6)); // true
