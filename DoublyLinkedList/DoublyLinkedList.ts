export class Node<T> {
  public element: T;
  public previous: Node<T> | null;
  public next: Node<T> | null;

  constructor(element: T) {
    this.element = element;
  }
}

export default class DoublyLinkedList<T> {
  private head: Node<T> | null = null;

  private tail: Node<T> | null = null;

  private length: number = 0;

  getHead(): T | null {
    return this.head ? this.head.element : null;
  }

  getTail(): T | null {
    return this.tail ? this.tail.element : null;
  }

  append(element: T): T {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.previous = currentNode;
      this.tail = node;
    }
    this.length++;
    return element;
  }

  insert(element: T, index: number): T | null {
    if (index < 0 || index > this.length) return null;
    const node = new Node(element);
    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head.next;
        this.head = node;
      }
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let i = 0;
      while (i < index) {
        current = current.next;
        previous = current;
        i++;
      }
      node.previous = previous;
      node.next = current.next;
      previous.next = node;
      current.previous = node;
    }
    this.length++;
    return element;
  }

  removeAt(index: number): T | null {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      if (this.head) {
        const secondNode = this.head.next;
        secondNode.previous = null;
        this.head = secondNode;
        this.length--;
      }
    } else if (index === this.length - 1) {
      if (this.tail) {
        const llastNode = this.tail.previous;
        llastNode.next = null;
        this.tail = llastNode;
        this.length--;
      }
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let next: Node<T> | null = null;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      previous = current.previous;
      next = current.next;
      previous.next = next;
      next.previous = current;
      this.length--;
    }
    return null;
  }

  size(): number {
    return this.length;
  }

  toString(): string {
    let current = this.head;
    let str = '';
    while (current) {
        str += ',' + current.element;
        current = current.next;
    }
    return str;
  }
}
