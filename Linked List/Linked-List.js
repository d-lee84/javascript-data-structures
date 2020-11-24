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
  constructor(value) {
    this.list = new Node(value, null);
    this.size = 1;
  }

  addFirst(value) {
    this.list = new Node(value, this.list);
    this.size++;
  }


  addLast(value) {
    let pointer = this.list;
    
    while(pointer.next != null) {
      pointer = pointer.next;
    }

    pointer.next = new Node(value, null);

  }

  get(indx) {
    let pointer = this.list;

    while(indx > 0) {
      pointer = pointer.next;
      indx--;
    }

    return pointer.value;
  }

  delete(value) {
    if (value === undefined) return;

    let pointer = this.list;

    while (pointer != null) {
      
      if (pointer.value === value) {
        
        
      }
    }
  }


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





}


let myList = new SinglyLinkedList(4);
myList.addFirst(3);

console.log(myList.get(0));
console.log(myList.get(1));
myList.printList();
