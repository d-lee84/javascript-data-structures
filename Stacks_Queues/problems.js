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



/** Problem 3.3: 
 *  Instead of having each node store data regarding the min
 *  we have a second stack that stores the minimum values
 *  - This helps to save space
 */

class MinStack2 {
  constructor() {
    this.top = null;
    this.minStack = new Stack();
  }

  push(value) {
    
    if(this.top === null){
      this.top = new StackNode2(value);
      this.minStack.push(value);
      return;
    }
    
    if (value <= this.minStack.top.value){
      this.minStack.push(value);
    }

    let newTop = new StackNode2(value, this.top);
    this.top = newTop
  }

  pop(){
    if(this.top == null){
      throw new Error("No value in the stack");
    }

    if (this.top.value === this.min()){
      this.minStack.pop();
    }
    
    this.top = this.top.next;

  }

  min(){
    return this.minStack.top.value;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if(this.top === null){
      this.top = new StackNode2(value);
      return;
    }

    let newTop = new StackNode2(value, this.top);
    this.top = newTop
  }

  pop(){
    if(this.top == null){
      throw new Error("No value in the stack");
    }

    this.top = this.top.next;
  }

}

class StackNode2 {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}


let myStack2 = new MinStack2();
// myStack2.pop(); Confirmed that this errors
myStack2.push(4);
myStack2.push(2);

// Should get 2
console.log(myStack2.min());

myStack2.push(3);

// Should get 2
console.log(myStack2.min());

myStack2.push(1);

//Should get 1
console.log(myStack2.min());

myStack2.pop();

//Go back to 2
console.log(myStack2.min());