/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }
      else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length ++;
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }
      else {
        let previousHead = this.head;
        this.head = newNode;
        this.head.next = previousHead;
      }
      this.length ++;
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      if (!this.tail) {
        throw 'Error - Array is Empty'
      }
      let currentNode = this.head;
      while (currentNode) {
        if (this.length == 1) {
          let poppedNode = currentNode.val;
          this.head = null;
          this.tail = null;
          this.length --;
          return poppedNode;
        }
        if (currentNode.next.next == null) {
          let poppedNode = currentNode.next.val;
          this.tail = currentNode;
          this.length --;
          return poppedNode;
        }
      }
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      if (!this.head) {
        throw new Error;
      }
      let shiftedNode = this.head.val;
      this.head = this.head.next;
      if (this.length == 1) {
        this.tail = null;
      }
      this.length --;
      return shiftedNode;
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
      let currentNode = this.head;
    
        if (idx == 0) {
          return this.head.val;
        }
        else {
          for (let i=1; i<=idx; i++) {
          currentNode = currentNode.next;
          }
          return currentNode.val;
        }    
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
      if (idx >= this.length || idx < 0) {
        throw new Error("Invalid index.");
      }
      
      let currentNode = this.head;
      let count = 0;
      while (currentNode != null && count != idx) {
          count ++;
          currentNode = currentNode.next;
        }
        currentNode.val = val;
      }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
      if (idx > this.length || idx < 0) {
        throw Error("Invalid index.");
      }
      const newNode = new Node(val);
      if (idx == 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length ++;
      }
      // this is what the solution used, it is more efficient
      // but I wanted to get my original thought process to work
      // if (idx == 0) {
      //   return this.unshift(val);
      // }
      // else if (idx === this.length) {
      //   return this.push(val);
      // }
      else {
        let currentNode = this.head;
        let count = 0;
        while (currentNode != null && count != idx-1) {
          count ++;
          currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        if (idx === this.length) {
          this.tail = this.tail.next;
        }
        this.length++;
      }
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
      if (idx > this.length || idx < 0) {
        throw Error("Invalid index.");
      }
      if (idx == this.length -1) {
        return this.pop()
      }
      let currentNode = this.head;
      let count = 0;
      while (currentNode != null && count != idx -1) {
          count ++;
          currentNode = currentNode.next;
        }
      currentNode.next = currentNode.next.next;
  
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      if (this.length == 0) {
        return 0;
      }
      let sum = 0;
      let count = 0;
      let currentNode = this.head;
      while (currentNode != null) {
        sum += currentNode.val;
        count++;
        currentNode = currentNode.next;
      }
      return sum/count;
    }
  }

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
      this._list = new LinkedList();
    }
    
  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this._list.length == 0) {
      throw new Error;
    }
    const val = this._list.shift();
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._list.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this._list.length == 0) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;