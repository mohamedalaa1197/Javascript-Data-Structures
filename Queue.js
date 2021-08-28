class QNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new QNode(value);
        this.first = newNode;
        this.Last = newNode;
        this.Length = 1;
    }

    enQueue(value) {
        const newNode = new QNode(value);
        if (this.Length === 0) {
            this.first = this.Last = newNode;
        } else {
            this.Last.next = newNode;
            this.Last = newNode;
        }
        this.Length++;
        return this;
    }

    deQueue() {
        let temp = this.first;
        if (this.Length === 0) return undefined;
        if (this.Length === 1) {
            this.first = this.Last = null
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.Length--;
        return temp;
    }
}
const myqueue = new Queue(4);