const Deque = require("./deque");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("appendleft", function() {
  it("places the value at the beginning of the queue and returns undefined", function() {
    expect(deque.appendleft(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendleft(100);
    expect(deque.first.val).toBe(100);
    expect(deque.first.prev).toBe(null);
    expect(deque.last.val).toBe(10);
    expect(deque.last.prev.val).toBe(100);
    deque.appendleft(1000);
    expect(deque.first.val).toBe(1000);
    expect(deque.last.val).toBe(10);
  });
});

describe("appendright", function() {
  it("places the value at the end of the queue and returns undefined", function() {
    expect(deque.appendright(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendright(100);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(100);
    deque.appendright(1000);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(1000);
  });
});

describe("popleft", function() {
  it("returns the value of the node removed at beginning", function() {
    deque.appendright(10);
    deque.appendright(100);
    deque.appendright(1000);
    let removed = deque.popleft()
    expect(removed).toBe(10);
    expect(deque.size).toBe(2);
    deque.popleft();
    deque.popleft();
    expect(deque.size).toBe(0);
  })
  it("throws an error if the deque is empty", function() {
    expect(() => deque.popright()).toThrow(Error);
  });
});

describe("popright", function() {
  it("returns the value of the node removed at end", function() {
    deque.appendright(10);
    deque.appendright(100);
    deque.appendright(1000);
    let removed = deque.popright()
    expect(removed).toBe(1000);
    expect(deque.size).toBe(2);
    let removed2 = deque.popright()
    expect(removed2).toBe(100);
    deque.popright();
    expect(deque.size).toBe(0);
  })

  it("throws an error if the deque is empty", function() {
    expect(() => deque.popright()).toThrow(Error);
  });
});

describe("peekleft", function() {
  it("returns the value at the beginning of deque", function() {
    deque.appendright(3);
    expect(deque.peekleft()).toBe(3);
    deque.appendright(5);
    expect(deque.peekleft()).toBe(3);
  });
});
describe("peekright", function() {
  it("returns the value at the end of deque", function() {
    deque.appendright(3);
    expect(deque.peekright()).toBe(3);
    deque.appendright(5);
    expect(deque.peekright()).toBe(5);
  });
});

describe("isEmpty", function() {
  it("returns true for empty deques", function() {
    expect(deque.isEmpty()).toBe(true);
  });

  it("returns false for nonempty queues", function() {
    deque.appendright(3);
    expect(deque.isEmpty()).toBe(false);
  });
});
