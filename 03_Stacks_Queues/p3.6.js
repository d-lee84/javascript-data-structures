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

class AnimalShelter { // Without Using Order

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

    while (!(ptr.value instanceof Dog)) {
      ptr = ptr.next;
    }

    let pet = ptr.value;
    this.delete(pet);

  }

  dequeueCat() {
    let ptr = this.pets;

    while (!(ptr.value instanceof Cat)) {
      ptr = ptr.next;
    }

    let pet = ptr.value;
    this.delete(pet);
  }

}


class AnimalShelter2 { // With Using Order

  constructor() {
    this.catStack = new Stack()
    this.dogStack = new Stack()
    this.order = 0;
  }

  enqueue(pet) {

    pet.setOrder(this.order);
    this.order++;

    if (pet instanceof Dog) {
      this.dogStack.push(pet);
    } else {
      this.catStack.push(pet);
    }
  }

  dequeueAny() {
    let pet = this.pets.get(0);
    this.delete(pet);
  }

  dequeueDog() {

    let ptr = this.pets;

    while (!(ptr.value instanceof Dog)) {
      ptr = ptr.next;
    }

    let pet = ptr.value;
    this.delete(pet);

  }

  dequeueCat() {
    let ptr = this.pets;

    while (!(ptr.value instanceof Cat)) {
      ptr = ptr.next;
    }

    let pet = ptr.value;
    this.delete(pet);
  }

}

/** Use an animal class in order to hold the order of the animal */

class Animal {
  constructor(name) {
    this.name = name;
    this.order = 0;
  }

  setOrder(val) {
    this.order = val;
  }
}



/** Cat class to use as our example */

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

/** Dog class to use as our example */

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}



/** Regular Queue Class */

// Queue class 
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // adding element to the queue 
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty())
      return "Nothing in the Queue";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
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
