class SNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(value) {
        const newNode = new SNode(value);
        this.top = newNode;
        this.Length = 1;
    }

    push(value) {
        const newNode = new SNode(value);
        if (this.Length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.Length++;
        return this;

    }
    pop() {
        let temp = this.top;
        if (!this.top) return undefined;
        if (this.Length === 1) {
            this.top = null;
        } else {
            this.top = this.top.next;
            temp.next = null;
        }
        this.Length--;
        return temp;

    }
}

const myStack = new Stack(12);