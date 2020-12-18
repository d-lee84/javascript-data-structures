"use strict";

/** An animal shelter holds only dogs and cats, and operates 
 *  on a strictly “first in, first out” basis. People must adopt 
 *  either the “oldest” (based on arrival time) of all animals at 
 *  the shelter, or they can select whether they would prefer a 
 *  dog or a cat (and will receive the oldest animal of that type). 
 *  They cannot select which specific animal they would like. 
 *  Create the data structures to maintain this system and implement 
 *  operations such as enqueue, dequeueAny, dequeueDog and dequeueCat. 
 *  You may use built-in LinkedList data structure. */

class AnimalShelter {

  constructor() {
    this.pets = new SinglyLinkedList()
  }

  enqueue(pet) {
    this.pets.addLast(pet);
  }

  dequeueAny() {
    let pet = this.pets.get(0);
    this.delete(pet);
  }

  dequeueDog() {

    let ptr = this.pets;

    while(!(ptr.value instanceof Dog)){
      ptr = ptr.next;
    }

    let pet = ptr.value;
    this.delete(pet);

  }

  dequeueCat() {
    let ptr = this.pets;

    while(!(ptr.value instanceof Cat)){
      ptr = ptr.next;
    }

    let pet = ptr.value;
    this.delete(pet);
  }

}

/** Cat class to use as our example */

class Cat {

  constructor(name) {
    this.name = name;
  }
}

/** Dog class to use as our example */

class Dog {
  constructor(name) {
    this.name = name;
  }
}



/** Regular Stack Class */

class Stack {

  constructor() {
    this._storage = {};

    this.count = 0;
  }

  /** Add an item to the end of the stack */
  push(val) {
    this._storage[this._count + 1] = val;
    this._count += 1;
    return this._count;
  };

  /** Pop the item from the end of the stack */

  pop() {
    let value = this._storage[this._count - 1];
    this._count -= 1;
    delete this._storage[this._count];
    if (this._count < 0) {
      this._count = 0;
    }
    return value;
  };

  /** Look at the item from the end of the stack */

  peek() {
    return this._storaget[this._count - 1];
  }

  /** Return the size of the stack */

  size() {
    return this._count;
  };

}


/** Each item inside the linked list is a Node
 *  - Node contains a property of value which refer to the value itself
 *  - Node also points to a next item which must be a node
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = (next instanceof Node)
      ? next
      : null;
  }

  showValue() {
    return this.value;
  }

  showNext() {
    return this.next;
  }
}



class SinglyLinkedList {
  constructor(list = null) {
    this.list = list ? list : null;
  }

  /** Adds a new Node to the front of the list */
  addFirst(value) {
    this.list = new Node(value, this.list);
    this.size++;
  }

  /** Adds a new Node to the back of the list */
  addLast(value) {
    // If there are no items in the list yet 
    // then it adds to the front
    if (this.list === null) {
      this.addFirst(value);
      return;
    }

    this.size++;

    let pointer = this.list;

    while (pointer.next != null) {
      pointer = pointer.next;
    }

    pointer.next = new Node(value, null);

  }


  /** Gets the indexed element of the list */
  get(indx) {
    let pointer = this.list;

    while (indx > 0) {
      pointer = pointer.next;
      indx--;
    }

    return pointer.value;
  }

  /** Deletes one Node containing the value */
  delete(value) {
    if (value === undefined) return;

    let pointer = this.list;
    let prev = this.list;

    // Check if the first Node has the value
    if (pointer.value === value) {
      this.list = pointer.next;
      return;
    }


    while (pointer != null) {
      if (pointer.value === value) {
        prev.next = pointer.next;
        return;
      }

      prev = pointer;
      pointer = pointer.next;
    }

  }
}
