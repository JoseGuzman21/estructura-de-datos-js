class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(2);

// myDoublyLinkedList.append(2);
// myDoublyLinkedList.append(3);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.prepend(0);


console.log(myDoublyLinkedList)