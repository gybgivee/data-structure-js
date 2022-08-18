/* 
Stack : LIFO => undo button
Good (fast),O(1) : push,pop, peek(view the top most plate)
Bad (slow),O(n): look up
*/

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  class StackWithLinkedList {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    //look at the last
    peek() {
      return this.top;
    }
    push(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const lastTop = this.top;
        this.top = newNode;
        this.top.next = lastTop;
      }
      this.length++;
      return this;
    }
    pop(){
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      const lastTop = this.top;
      this.top = this.top.next;
      this.length--;
      return this;
    }
    //isEmpty
  }
  
  const myStack = new StackWithLinkedList();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();

  class StackWithArray {
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }
  
  const myStack2 = new StackWithArray();
  myStack2.peek();
  myStack2.push('google');
  myStack2.push('udemy');
  myStack2.push('discord');
  myStack2.peek();
  myStack2.pop();
  myStack2.pop();
  myStack2.pop();
  