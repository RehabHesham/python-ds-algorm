// function search(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return true;
//   }
//   return false;
//   // Time complexity: O(n)
// }

// function calc(num1, num2) {
//   return num1 + num2;
//   // Time complexity: O(1)
// }

// function testFull(arr) {
//   if (arr[arr.length - 1]) return true;
//   return false;
//   // Time complexity: O(1)
// }

// let arr = [5, 7, 8, 3];
// console.log(`is 10 in the arr? ${search(arr, 10)}`);

// // Array , object

// let names = ["Ali", "mona"];

// let namesObj = {
//   ali: true,
//   mona: true,
// };

// console.log(namesObj.ali);
// console.log(namesObj.mona);
// console.log(namesObj.ahmed);

/////////////////////////////////////////////////

// Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    ///////// if have size
    // if (this.size !== 0) return false;
    // return true;

    ///////// if have heas and tail
    // if(!this.head && !this.tail) return true;
    // return false;

    ///////// if have only head
    if (!this.head) return true;
    return false;
  }

  push(value) {
    const newNode = new Node(value);
    // if list is empty
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    // if list have Nodes
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const removedNode = this.tail;
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    }
    // if have more than one node
    else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      // current now point to second-to-last node
      this.tail = current;
      this.tail.next = null;
    }

    this.size--;
    return removedNode;
  }

  unshift(value) {
    const newNode = new Node(value);
    // list is emplty
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    // list have nodes
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
    return this;
  }

  shift() {
    // if list is empty
    if (this.isEmpty()) return undefined;

    // if contain one node
    const removedNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    // if conatins many nodes
    else {
      this.head = this.head.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }

  get(index) {
    // if index out of scope
    if (index < 0 || index >= this.size) return undefined;

    // if in middle
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(value, index) {
    let node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.size) return !!this.push(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.size++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) return undefined;

    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;

    prevNode.next = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }

  print() {
    // traverse on linked
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  linearSearch(value){
    let current = this.head;
    let index = -1;;
    while(current){
      index++;
      if(current.value === value) return index;
      current = current.next;
    }
    return -1;
  }
}

let mylinkedList = new LinkedList();

mylinkedList.unshift(10);
mylinkedList.unshift(5);
mylinkedList.push(2);

mylinkedList.print();