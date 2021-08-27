class DoublyXNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
            const newNode = new DoublyXNode(value);
            this.head = newNode;
            this.tail = this.head;
            this.Length = 1;
        }
        //Add Item To the End Of The List
    push(value) {
        const newNode = new DoublyXNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.Length++;
        return this;
    }

    //Remove item From The end Of the List
    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.Length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null

        }
        this.Length--;
        return temp;
    }

    //Insert an Item to The beginng of the List
    unshift(value) {
        const newNode = new DoublyXNode(value);
        if (length === 1) {
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            newNode.prev = null;
            this.head = this.head.prev;
        }
        this.Length++;
        return this;
    }

    //Remove Item From The beginning of the List 
    shift() {
        if (this.Length === 0) return undefined;
        let temp = this.head;
        if (this.Length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.Length--;
        return temp;
    }

    //Return an Item at Specific Index
    get(index) {
        if (index < 0 || index >= this.Length) return undefined;
        if (this.Length === 0) return undefined;
        if (this.Length === 1) return this.head;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    //Set value for Item at specific Location
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    //Insert New Value at specific Index;s
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.Length) return this.push(value);
        if (index < 0 || index >= this.Length) return false;
        let newNode = new DoublyXNode(value);
        let before = this.get(index - 1);
        newNode.prev = before;
        newNode.next = before.next;
        before.next.prev = newNode;
        before.next = newNode;
        this.Length++;
        return true;



    }

    //Remove an Item at Specific Index
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.Length - 1) return this.pop();
        if (index < 0 || index >= this.Length) return undefined;
        let temp = this.get(index);
        temp.next.prev = temp.prev;
        temp.prev.next = temp.next;
        temp.next = null;
        temp.prev = null;
        this.Length--;
        return temp;
    }
}
let doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.push(4);
doublyLinkedList.push(4);