describe("Linked List testing", function () {
  let myList = new SinglyLinkedList(4);
  myList.addFirst(3);
  myList.addLast(5);
  myList.addFirst(2);
  myList.addFirst(4);

  let myList2 = new SinglyLinkedList();
  myList2.addFirst('Hi');
  myList2.addLast("There");
  myList2.addFirst("This");
  myList2.addFirst("What");
  myList2.addFirst("Yellow");
  myList2.addFirst("Blue");

  it("should correctly add to the front and back of the list", function () {
    expect(myList.get(0)).toEqual(4);
    expect(myList.get(1)).toEqual(2);
    expect(myList.get(2)).toEqual(3);
    expect(myList.get(3)).toEqual(4);
    expect(myList.get(4)).toEqual(5);

    expect(myList2.get(0)).toEqual("Blue");
    expect(myList2.get(1)).toEqual("Yellow");
    expect(myList2.get(2)).toEqual("What");
    expect(myList2.get(3)).toEqual("This");
    expect(myList2.get(4)).toEqual("Hi");
    expect(myList2.get(5)).toEqual("There");
  });


  it("should correctly print the list", function () {
    expect(myList.printList()).toEqual("List: 4, 2, 3, 4, 5");
    expect(myList2.printList()).toEqual("List: Blue, Yellow, What, This, Hi, There");
  });

  it("should return the correct size of the list", function () {
    expect(myList.getSize()).toEqual(5);
    expect(myList2.getSize()).toEqual(6);
  });



  let myList3 = new SinglyLinkedList(4);
  myList3.addFirst(4);
  myList3.addFirst(1);
  myList3.addFirst(2);
  myList3.addFirst(3);
  myList3.addFirst(4);
  myList3.addLast(5);
  myList3.addFirst(4);
  myList3.addLast(1);
  myList3.addLast(2);
  myList3.addLast(3);


  it("should correctly remove the duplicates of the list", function () {
    expect(myList3.printList()).toEqual("List: 4, 4, 3, 2, 1, 4, 4, 5, 1, 2, 3");

    myList3.deleteDuplicates();
    expect(myList3.printList()).toEqual("List: 4, 3, 2, 1, 5");
  });


  let myList4 = new SinglyLinkedList(4);
  myList4.addFirst(4);
  myList4.addFirst(1);
  myList4.addFirst(2);
  myList4.addFirst(3);
  myList4.addFirst(4);
  myList4.addLast(5);
  myList4.addFirst(4);
  myList4.addLast(1);
  myList4.addLast(2);
  myList4.addLast(3);

  it("should correctly get the k-th element from the end of the list", function () {
    expect(myList4.getKthElementFromEnd(0)).toEqual(3);
    expect(myList4.getKthElementFromEnd(1)).toEqual(2);
    expect(myList4.getKthElementFromEnd(2)).toEqual(1);
  });



  let myList5 = new SinglyLinkedList(4);
  myList5.addFirst(4);
  myList5.addFirst(1);
  myList5.addFirst(2);
  myList5.addFirst(3);
  myList5.addFirst(4);
  myList5.addLast(5);
  myList5.addFirst(4);
  myList5.addLast(1);
  myList5.addLast(2);
  myList5.addLast(3);




  it("should partition the list properly", function () {
    myList5.partition(4);
    expect(myList5.printList()).toEqual("List: 3, 2, 1, 1, 2, 3, 4, 4, 4, 4, 5");
  });




});