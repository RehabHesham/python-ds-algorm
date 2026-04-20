class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty(){
        //return this.length === 0;
        return !this.front;
    }
    enqueue(value){
        const newNode = new Node(value);

        // if queue is empty
        if(this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        }
        // if queue has node/s
        else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        // if queue is empty
        if(this.isEmpty()) return undefined;

        // if queue have values
        let returnNode = this.front;

        this.front = this.front.next;
        returnNode.next = null;

        this.length --;
        return returnNode.value;
    }

    peek(){
        if(this.isEmpty()) return undefined;

        return this.front.value;
    }

    toArray(){
        let arr = [];
        let current = this.front;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}


const myQueue = new Queue();

myQueue.enqueue(5).enqueue(8).enqueue(1);

console.log(myQueue.toArray());

console.log( myQueue.dequeue());


console.log(myQueue.toArray());