export declare class Node<T> {
    element: T;
    next: Node<T> | null;
    constructor(element: T);
}
export declare class LinkedList<T> {
    private head;
    private length;
    append(element: T): void;
    removeAt(index: number): T | null;
    insert(element: T, index: number): boolean;
    size(): number;
    toString(): string;
}
