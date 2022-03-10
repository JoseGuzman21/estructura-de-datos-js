class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const node = this.top;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = node.next;
        }
        this.length--;
        return this;
    }
}

const stack = new Stack();

stack.push('Jose');
stack.push('Jose123');
stack.pop()
