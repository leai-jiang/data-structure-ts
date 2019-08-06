export default class Queue<T> {
  private arr: T[] = [];

  // 入队
  enqueue(element: T): T {
    this.arr.push(element);
    return element;
  }

  // 出队
  dequeue(): T | undefined {
    return this.arr.shift();
  }

  // front
  front(): T {
    return this.arr[0];
  }

  // isEmpty
  isEmpty(): boolean {
    return this.arr.length === 0;
  }

  // size
  size(): number {
    return this.arr.length;
  }

  // toString
  toString(): string {
    return "[Queue] " + this.arr.join(",");
  }
}
