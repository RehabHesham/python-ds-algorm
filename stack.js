class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    //return this.length === 0;
    //return this.top === null;
    return !this.top;
  }

  push(value) {
    const newNode = new Node(value);

    // if stack is empty
    if (this.isEmpty()) {
      this.top = newNode;
    }

    // if stack has nodes
    else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
    // chaining for push
    // time Complexity: O(1)
  }

  pop() {
    // if stack is empty
    if (this.isEmpty()) return undefined;

    // if stack have one node
    // if stack have many nodes
    const returnValue = this.top;

    this.top = this.top.next;

    returnValue.next = null;

    this.length--;
    return returnValue.value;
    // time Complexity: O(1)
  }

  peek() {
    // if stack is empty
    if (this.isEmpty()) return undefined;

    // if stack have nodes
    return this.top.value;
  }

  toArray() {
    let arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

function sortStack(stack) {
  const tempStack = new Stack();

  // loop until main stack is empty
  while (!stack.isEmpty()) {
    // pop value from main stack
    let temp = stack.pop();

    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  // with the end of the first loop all data is sorted in tempStack descending

  // to return data in main stack with ascending order
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

let myStack = new Stack();

myStack.push(5);
myStack.push(3);
myStack.push(1).push(4).push(2);

console.log("Stack before sorting");
console.log(myStack.toArray());

sortStack(myStack);

console.log("Stack after sorting");
console.log(myStack.toArray());
