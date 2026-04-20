class Node {
  constructor(value) {
    this.value = value;
    //this.counter = 1;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // if tree is empty
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // if tree have nodes
    let current = this.root;
    while (true) {
      // if value less than current node
      if (value < current.value) {
        // if left child is null , insert newNode
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        // else, move to left
        current = current.left;
      }

      // if value greater than current node
      else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }

      // if value equal to current node
      // Binary Search tree (no duplicated nodes)
      // --> ignore value
      // --> add counter to node to check it appeared how many times
      else {
        return this;
      }
    }
  }

  search(value) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  contains(value, current = this.root) {
    //base case  => return value
    if (!current) return false;
    if (value === current.value) return true;

    //recursion case => function calls itself
    if (value < current.value) {
      return this.contains(value, current.left);  
    }else if(value > current.value){
        return this.contains(value, current.right);
    }
  }

  minValue(node){
    let current = node;
    while(current.left){
        current = current.left;
    }
    return current.value;
  }

  #delete(value,current){
    // base case
    if(!current) return null;

    // recursion case
    if(value < current.value){
        current.left = this.#delete(value,current.left);
    }else if(value > current.value){
        current.right = this.#delete(value, current.right);
    }else{
        // found node to delete

        // if leaf node
        if(!current.left && !current.right) return null;

        // has one child
        if(!current.right){
            return current.left;
        }else if(!current.left){
            return current.right;
        }else{
            // find right minValue
                let subTreeMin = this.minValue(current.right);
            // replace current with min
                current.value = subTreeMin;
            // delete minValue
               current.right = this.#delete(subTreeMin, current.right);
        }
    }
    return current;
  }
  delete(value){
    this.root = this.#delete(value,this.root);
  }
}

const myTree = new BinarySearchTree();

myTree.insert(47);
myTree.insert(21);
myTree.insert(18);
