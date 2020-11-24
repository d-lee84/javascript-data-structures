"use strict";


/** My implementation of the Linked List Data Structure in JS
 *  https://www.geeksforgeeks.org/data-structures/linked-list/
 * 
 * 
 */


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
  constructor(value = null) {
    this.list = value ? new Node(value, null) : null;
    this.size = value ? 1 : 0;
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
    
    while(pointer.next != null) {
      pointer = pointer.next;
    }

    pointer.next = new Node(value, null);

  }


  /** Gets the indexed element of the list */
  get(indx) {
    let pointer = this.list;

    while(indx > 0) {
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

  /** Prints the list in this format
   *  "List: value1, value2, etc..."
   */
  printList() {
    let listStr = "List: ";
    let pointer = this.list;

    while(pointer.next != null) {
      listStr += pointer.value;
      listStr += ", ";

      pointer = pointer.next;
    }

    listStr += pointer.value;

    console.log(listStr);

    return listStr;
  }


  /** Returns the size of the list */
  getSize() {
    return this.size;
  }
}


let myList = new SinglyLinkedList(4);
myList.addFirst(3);
myList.addLast(5);
myList.addFirst(2);
myList.addFirst(4);


myList.printList();

myList.delete(2);
myList.delete(4);
myList.delete(5);

myList.printList();
