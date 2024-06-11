class Queue {//Queue class O(1)
  constructor() {
    this.queue = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) { //O(1)
    this.queue[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {//O(1)
    const item = this.queue[this.headIndex];

    delete this.queue[this.headIndex];
    this.headIndex++;

    return item;
  }

  peek() {//O(1)
    return this.queue[this.headIndex];
  }

  contains(arg) {//O(n)
    for (let el of Object.values(this.queue)) {
      if (arg === el) {
        return true;
      }

      return false;
    }
  }
}