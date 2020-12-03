"use strict";

/** Problem 3.2: 
 * Design a stack that in addition to push
 * and pop, it also retreives the min value
 *  - O(1) runtime
 */

class MinStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if(this.top === null){
      this.top = new StackNode(value, value);
      return;
    }

    let newMin = (value < this.top.minValue) 
      ? value
      : this.top.minValue;

    let newTop = new StackNode(value, newMin, this.top);
    this.top = newTop
  }

  pop(){
    if(this.top == null){
      throw new Error("No value in the stack");
    }

    this.top = this.top.next;
  }

  min(){
    return this.top.minValue;
  }
}

class StackNode {
  constructor(value, minValue, next=null) {
    this.value = value;
    this.minValue = minValue;
    this.next = next;
  }
}



let myStack = new MinStack();
// myStack.pop(); Confirmed that this errors
myStack.push(4);
myStack.push(2);

// Should get 2
console.log(myStack.min());

myStack.push(3);

// Should get 2
console.log(myStack.min());

myStack.push(1);

//Should get 1
console.log(myStack.min());

myStack.pop();

//Go back to 2
console.log(myStack.min());

