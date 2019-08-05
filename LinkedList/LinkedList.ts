export class Node<T> {
  public element: T;
  public next: Node<T> | null = null;

  constructor(element: T) {
    this.element = element;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null = null;

  private length: number = 0;

  // 在链表最后添加一个节点
  append(element: T): T {
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
    return element;
  }

  // 删除指定index的节点
  removeAt(index: number): T | null {
    if (index < 0 || index > this.length || this.head == null) return null;
    let currentNode = this.head;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      let i = 0;
      let previousNode: Node<T> | null = null;
      while (i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next as Node<T>;
        i++;
      }
      (previousNode as Node<T>).next = currentNode.next;
    }
    this.length--;
    return currentNode.element;
  }

  // 在指定位置添加节点
  insert(element: T, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    let node = new Node(element);
    if (index === 0 || this.head == null) {
      node.next = this.head;
      this.head = node;
    } else {
      let i = 0;
      let currentNode = this.head;
      let previousNode: Node<T> | null = null;
      while (i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next as Node<T>;
        i++;
      }
      (previousNode as Node<T>).next = node;
      node.next = currentNode;
    }
    this.length++;
    return true;
  }

  // 返回链表的大小
  size(): number {
    return this.length;
  }

  // 自定义了一个 toString
  toString(): string {
    let current = this.head;
    let resultStr = "";
    while (current) {
      resultStr += current.element + ",";
      current = current.next;
    }
    return "[LinkedList] " + resultStr;
  }
}
