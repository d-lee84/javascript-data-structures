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

  /** Prints the list in this format
   *  "List: value1, value2, etc..."
   */
  printList() {
    let listStr = "List: ";
    let pointer = this.list;

    while (pointer.next != null) {
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


  /** Removes any duplicates from the linked list */
  deleteDuplicates() {
    let numSet = new Set();
    let prev = null;
    let ptr = this.list;
    
    while(ptr !== null) {
        if(numSet.has(ptr.value)){
            prev.next = ptr.next;
        } else {
            numSet.add(ptr.value);
            this.size--;
            prev = ptr;
        }
        ptr = ptr.next;
    }
  }

  /** Finds the k-th element from the end */
  getKthElementFromEnd(k) {
    // Find the size of the list
    let ptr2 = this.list; 
    let ptr1 = this.list;

    for(let i = 0; i < k; i++) {
      ptr1 = ptr1.next;
    }

    while(ptr1.next !== null){
      ptr1 = ptr1.next;
      ptr2 = ptr2.next; 
    }

    return ptr2.value;
  }


  /** Returns a linked list:
   *  - Values less than partition (x) comes before
   *  - Values after partition (x)
   */
  partition(x) {
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    let ptr = this.list;

    // Traverse through the entire list
    while(ptr !== null) {
      // If value is greater, add to the before LinkedList
      if(ptr.value < x) {
        if(beforeStart === null) {
          beforeStart = ptr;
          beforeEnd = beforeStart;
        } else {
          beforeEnd.next = ptr;
          beforeEnd = ptr;
        }
      } else {
        if(afterStart === null) {
          afterStart = ptr;
          afterEnd = afterStart;
        } else {
          afterEnd.next = ptr;
          afterEnd = ptr;
        }
      }
    }

    // Check if the before LinkedList is empty 
    if (beforeStart === null) {
      return afterStart;
    }

    // Combine the lists and update the list
    beforeEnd.next = afterStart;

    this.list = beforeStart;

  }
}

class DNode {
  constructor(prev = null, value, next = null) {
    this.prev = null;
    this.value = value;
    this.next = (next instanceof DNode)
      ? next
      : null;
  }
}


class DoublyLinkedList {
  constructor(value = null) {
    this.size = value ? 1 : 0;
    this.list = value ? setUpList(value) : null;
  }

  setUpList(value) {

    let list = new DNode(null, value, null);

    list.next = list;
    list.prev = list;

    return list;
  }

  addFirst(value) {

    if (this.list === null) {
      this.list = setUpList(value);
      return;
    }

    let second = this.list.next;

    let node = new DNode(this.list, value, second);

    this.list.next = node;
    this.list.prev = node;

    this.size++;
  }


  addLast(value) {

    let second = this.sentinel.next;

    let node = new DNode(this.sentinel, value, second);

    this.sentinel.next = node;

    this.size++;
  }

}

// let myList = new SinglyLinkedList(4);
// myList.addFirst(3);
// myList.addLast(5);
// myList.addFirst(2);
// myList.addFirst(4);


// myList.printList();

// myList.delete(2);
// myList.delete(4);
// myList.delete(5);

// myList.printList();
