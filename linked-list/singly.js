let singleLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: null
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

}

let myLinkedList = new MySinglyLinkedList(2);

// myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.append(4);

myLinkedList.prepend(1);

console.log(myLinkedList)