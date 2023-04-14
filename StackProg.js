// STACK ---> LIFO (LAST IN FIRST OUT )

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack UnderFlow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    var str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";

    return str;
  }
}

let stack = new Stack();

// TO CHECK THE STACK IS EMPTY OR NOT
console.log(stack.isEmpty());

// TO ADD VALUE TO STACK
console.log(stack.push(20));
console.log(stack.push(10));
console.log(stack.push(30));
console.log(stack.push(50));
console.log(stack.push(40));

// TO PRINT THE VALUES OF STACK
console.log(stack.printStack());

// TO DELETE VALUE FROM STACK
console.log(stack.pop());

// TO GET PEEK VALUE OF STACK
console.log(stack.peek());

// TO CHECK THE STACK IS EMPTY OR NOT
console.log(stack.isEmpty());
