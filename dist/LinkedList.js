"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(element) {
        this.next = null;
        this.element = element;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    // 在链表最后添加一个节点
    LinkedList.prototype.append = function (element) {
        var node = new Node(element);
        if (!this.head) {
            this.head = node;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            this.length++;
        }
    };
    // 删除指定index的节点
    LinkedList.prototype.removeAt = function (index) {
        if (index < 0 || index > this.length || this.head == null)
            return null;
        var currentNode = this.head;
        if (index === 0) {
            this.head = currentNode.next;
        }
        else {
            var i = 0;
            var previousNode = null;
            while (i < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    };
    // 在指定位置添加节点
    LinkedList.prototype.insert = function (element, index) {
        if (index < 0 || index > this.length || this.head == null)
            return false;
        var node = new Node(element);
        if (index === 0) {
            this.head = node;
        }
        else {
            var i = 0;
            var currentNode = this.head;
            var previousNode = null;
            while (i < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            previousNode.next = node;
            node.next = currentNode;
        }
        return true;
    };
    // 返回链表的大小
    LinkedList.prototype.size = function () {
        return this.length;
    };
    // 自定义了一个 toString
    LinkedList.prototype.toString = function () {
        var current = this.head;
        var resultStr = "";
        while (current) {
            resultStr += "," + current.element;
            current = current.next;
        }
        return "[LinkedList] " + resultStr;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
