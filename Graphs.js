class Graph {
    constructor() {
        this.adjecencyList = {};
    }
    addVertix(vertix) {
        if (!this.adjecencyList[vertix]) {
            this.adjecencyList[vertix] = [];
            return true;
        }
        return false;
    }
    addEdge(vertix01, vertix02) {
        if (this.adjecencyList[vertix01] && this.adjecencyList[vertix02] &&
            !this.adjecencyList[vertix01].includes(vertix02) &&
            !this.adjecencyList[vertix02].includes(vertix01)) {

            this.adjecencyList[vertix01].push(vertix02);
            this.adjecencyList[vertix02].push(vertix01);
            return true;
        }
        return false;
    }
    removeEdge(vertix01, vertix02) {
        if (this.adjecencyList[vertix01] && this.adjecencyList[vertix02]) {
            this.adjecencyList[vertix01] = this.adjecencyList[vertix01]
                .filter(v => v !== vertix02);
            this.adjecencyList[vertix02] = this.adjecencyList[vertix02]
                .filter(v => v !== vertix01);
            return true;
        }
        return false;
    }
    removeVertix(vertix) {
        if (!this.adjecencyList[vertix]) return undefined;
        while (this.adjecencyList[vertix].length) {
            let temp = this.adjecencyList[vertix].pop();
            this.removeEdge(vertix, temp);
        }

        delete this.adjecencyList[vertix];
        return this;
    }
}

const graph = new Graph();
graph.addVertix("A");
graph.addVertix("B");
graph.addVertix("C");
graph.addVertix("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");