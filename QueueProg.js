
                    // QUEUE ---> FIFO (FIRST IN FIRST OUT )

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return !this.items.length;
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  printQueue() {
    var str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";

    return str;
  }
}

let queue = new Queue();

// TO CHECK THE QUEUE IS EMPTY OR NOT
console.log(queue.isEmpty());

// TO ADD VALUE TO QUEUE
console.log(queue.enqueue(20));
console.log(queue.enqueue(10));
console.log(queue.enqueue(30));
console.log(queue.enqueue(50));
console.log(queue.enqueue(40));

// TO PRINT THE VALUES OF QUEUE
console.log(queue.printQueue());

// TO DELETE VALUE FROM QUEUE
console.log(queue.dequeue());

// TO GET PEEK VALUE OF QUEUE
console.log(queue.peek());

console.log(queue.isEmpty());
