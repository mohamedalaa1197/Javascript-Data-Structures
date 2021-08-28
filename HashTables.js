class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
    _hash(key) {

        let hash = 0;
        for (let i = 0; i < key.Length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
        return this;
    }
    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    keys.push(this.dataMap[i][j][0]);

                }
            }
        }
        return keys;
    }
}

function findingMatchingItems(arr01, arr02) {

    let obj = {};

    for (let i = 0; i < arr01.length; i++) {
        obj[arr01[i]] = true;
    }

    for (let j = 0; j < arr02.length; j++) {
        if (obj[arr02[j]]) return true;
    }
    return false;
}

let c = findingMatchingItems([0, 5, 3], [0, 1, 9]);
const hashTable = new HashTable(5);