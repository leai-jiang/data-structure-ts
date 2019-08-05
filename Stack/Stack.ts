export class Stack<T> {
  private top: number = 0;

  private arr: T[] = [];

  // 入栈
  push(element: T): T {
    this.arr[this.top++] = element;
    return element;
  }

  // 出栈
  pop(): T | null {
    if (this.top > 0) {
      return this.arr[--this.top];
    }
    return null;
  }

  peek(): T | null {
    if (this.top > 0) {
      return this.arr[this.top - 1];
    }
    return null;
  }

  clear() {
    this.top = 0;
    this.arr = [];
  }

  size(): number {
    return this.top;
  }

  toString(): string {
    return "[Stack] " + this.arr.splice(0, this.top).join(",");
  }
}