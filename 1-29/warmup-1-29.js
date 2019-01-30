'use strict';

class stackQueueNode {

  constructor(value){
    this.value = value;
    this.next = null;
  }

}

class Queue {

  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value) {

    const node = new stackQueueNode(value);
    
    if(!this.front){

      this.front = node;
      this.back = node;
      return;

    }

    this.back.next = node;
    this.back = node;

  }

  dequeue() {

    if(this.front === null){
      console.log(`nothing left`);
      
    }else{
      const dataPass = this.front.value;

      if (!this.front.next){
  
        this.front = null;
        this.back = null;
  
      } else {
  
        this.front = this.front.next;
  
      }
  
      return dataPass;
    }


    
  }

  peek() {

    if(this.front === null){
      throw new Error('Queue Empty');
    }

    return this.front.value;

  }
}


let q = new Queue();
console.log(q);
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.enqueue(10);

function traverse(queue) {
  let item = null;
  while( item = queue.dequeue() ) {
    console.log(item);
  }
}

traverse(q);

// ------------------------------------------------>



class Stack {

  constructor(){
    this.top = null;
  }

  push(value){

    let node = new stackQueueNode(value);

    if (!this.top){
      this.top = node;
      return;
    }

    node.next = this.top;
    this.top = node;

  }

  pop(){
    
    if (this.top === null) {

      throw new Error('The Stack is EMPTY!');

    }

    let nodePass = this.top;
    this.top = this.top.next;
    return nodePass.value;

  }

  peek(){

    if (this.top === null) {

      console.log(`nothing in the stack`);

    }else {

      return this.top.value;

    }


  }
}


let stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

function clear(stack) {
  while(stack.peek()) { 
    console.log(stack.pop());
  }
}

clear(stack);

// ------------------------------------------------>
class listNode{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new listNode(value);
    if ( ! this.head ) {
      this.head = node;
      return;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }

  }

  includes(value) {
    let current = this.head;
    while(current.next){
      if(current.node === value){
        return true;
      }
      current = current.next;
    }
    if(current.node === value && ! current.next){
      return true;
    }else if( ! current.next && current.node !== value){
      return false;
    }
  }
  list() {
    let current = this.head;
    while(current.next) {
      console.log(`list: ${current.value}`);
      current = current.next;
    }
    console.log(`list: ${current.value}`);
  }

}


let list = new LinkedList();

list.insert(2);
list.insert(4);
list.insert(6);
list.insert(8);
list.insert(10);



list.list();

// ------------------------------------------------>

'use strict';

class treeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  inOrder() {
    let nodes = [];
    let _walk = (node) => {

      if(node.left){
        _walk(node.left);
      }
      nodes.push(node.value);
      if(node.right){
        _walk(node.right);
      }

    };
    _walk(this.root);
    return nodes;
  }

  preOrder() {
    let nodes = [];
    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }

    };
    _walk(this.root);
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
      nodes.push(node.value);
    };
    _walk(this.root);
    return nodes;
  }

  breadthFirst(){
    let nodes = [this.root];
    let c = this.root;
    while(nodes.length){
      if(c.left){
        nodes.push(c.left);
      }
      if(c.right){
        nodes.push(c.right);
      }
      console.log(`print:${nodes.shift().value}`);
      c = nodes[0];
    }
  }

}

function fizzBuzzTree(tree) {
  let _walk = (node) => {
    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }
    if(node.value % 15 === 0){
      node.value = 'FizzBuzz';
    }
    if(node.value % 3 === 0){
      node.value = 'Fizz';
    }
    if(node.value % 5 === 0){
      node.value = 'Buzz';
    }

  };
  _walk(tree.root);
  return tree;
}

function findMax(tree){
  let max = 0;
  const _walk = (node) => {
    if(node.value > max){
      max = node.value;
    }
    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }
  };
  _walk(tree.root);
  return max;
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  add(value) {

    let newNode = new treeNode (value);

    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while(true){
        if(value === current.value) {return undefined; }
        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else { 
            current = current.left;
          }
        } else if (value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      } 
    }
  }


  contains(value) {
    if(this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else { 
        return true; 
      }
    }
    return false;
  }

}


let one = new treeNode(1);
let two = new treeNode(2);
let three = new treeNode(3);
let four = new treeNode(4);
let five = new treeNode(5);
let six = new treeNode(6);
let seven = new treeNode(7);
let eight = new treeNode(8);
let nine = new treeNode(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const tree = new BinaryTree();
tree.root = one;

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
