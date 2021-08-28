class BNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (temp.value === newNode.value) return undefined;
            if (newNode.value > temp.value) {
                if (!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            } else {
                if (!temp.left) {
                    temp.left = newNode
                    return this;
                }
                temp = temp.left;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;
        let temp = this.root;
        while (temp) {
            if (temp.value === value) {
                return true;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
        return false;
    }
}

const tree = new BSTree();
tree.insert(6);
tree.insert(15);
tree.insert(20);
tree.insert(3);