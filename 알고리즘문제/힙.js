class MaxHeap {
  #heap = [null];
  heapify(arr) {
    for (const n of arr) {
      this.push(n);
    }
  }

  show() {
    return this.#heap;
  }
  push(n) {
    this.#heap.push(n);
    let child = this.#heap.length - 1;
    let parent = Math.floor(child / 2);

    while (this.#heap[parent] !== null && this.#heap[parent] < this.#heap[child]) {
      [this.#heap[parent], this.#heap[child]] = [this.#heap[child], this.#heap[parent]];
      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  pop() {
    const result = this.#heap[1];

    this.#heap[1] = this.#heap.pop();

    let parent = 1;
    let child = this.#heap[2] > this.#heap[3] ? 2 : 3;

    while (this.#heap[parent] < this.#heap[child]) {
      [this.#heap[parent], this.#heap[child]] = [this.#heap[child], this.#heap[parent]];

      parent = child;
      child = this.#heap[parent * 2] > this.#heap[parent * 2 + 1] ? parent * 2 : parent * 2 + 1;
    }

    return result;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const h = new MaxHeap();
h.heapify(arr);
console.log(h.show());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
