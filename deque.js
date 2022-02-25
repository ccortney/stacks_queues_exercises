class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

    /** _get(idx): retrieve node at idx. */

  _find(idx) {
      let currentNode = this.head;
      let count = 0;

      while (currentNode !== null && count != idx) {
      count += 1;
      currentNode = currentNode.next;
      }

      return currentNode;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.prev = this.tail;
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
      previousHead.prev = newNode;
      this.head = newNode;
      this.head.next = previousHead;
    }
    this.length ++;
  }

  /** pop(): return & remove last item. */

  pop() {
      return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {
      return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
      return this._find(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    
    let currentNode = this._find(idx);
    currentNode.val = val;
    }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw Error("Invalid index.");
    }
    const newNode = new Node(val);

    if (idx == 0) {
      return this.unshift(val);
    }

    else if (idx === this.length) {
      return this.push(val);
    }
    else {
      let previousNode = this._find(idx - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      newNode.prev = previousNode;
      this.length++;
      return newNode.val;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      if (idx > this.length || idx < 0) {
          throw Error("Invalid index.");
      }

  // remove head
      if (idx == 0 && this.length > 1) {
          let nodeToRemove = this.head;
          this.head = this.head.next;
          this.head.prev = null;
          this.length --;
          return nodeToRemove.val;
      }

  // remove 1-element list
      else if (idx == 0 && this.length == 1) {
          let nodeToRemove = this.head;
          this.head = null;
          this.tail = null;
          this.length --;
          return nodeToRemove.val;
      }

      

  // remove tail
      if (idx == this.length - 1) {
          let nodeToRemove = this.tail;
          this.tail = nodeToRemove.prev;
          this.tail.next = null;
          this.length --;
          return nodeToRemove.val;
      }

  // remove from middle
      else {
          let nodeToRemove = this._find(idx);
          previousNode = nodeToRemove.prev;
          previousNode.next = nodeToRemove.next;
          previousNode.next.prev = previousNode;
          this.length --;
          return nodeToRemove.val;
      }
      
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

class Deque {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
      this._list = new DoublyLinkedList();
    }
    
  /** appendleft(val): add new value to beginning of deque. Returns undefined. */

  appendleft(val) {
    this._list.unshift(val)
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }

  /** appendright(val): add new value to end of deque. Returns undefined. */

  appendright(val) {
    this._list.push(val)
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }


  /** popleft(): remove the node from the beginning of deque
   * and return its value. Should throw an error if the stack is empty. */

  popleft() {
    if (this._list.length == 0) {
      throw new Error;
    }
    const val = this._list.shift()
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
    return val;
  }

  /** popright(): remove the node from the end of deque
   * and return its value. Should throw an error if the stack is empty. */

   popright() {
     if (this._list.length == 0) {
       throw new Error;
     }
    const val = this._list.pop()
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
    return val;
  }

  /** peekleft(): return the value of the node at beginning of deque. */

  peekleft() {
    return this._list.head.val;
  }

  /** peekright(): return the value of the node at end of deque. */

  peekright() {
    return this._list.tail.val;
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */

  isEmpty() {
    if (this._list.length == 0) {
      return true;
    }
    return false;
  }
}

module.exports = Deque;