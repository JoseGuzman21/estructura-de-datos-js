class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }

    // Depth First Search
    dfs(startingNode) {
        const visited = {};
        const nodes = Object.keys(this.adjacentList);
        for (let node of nodes) {
            visited[node] = false;
        }
        this.dfsRecursive(startingNode, visited);
    }

    dfsRecursive(node, visited) {
        visited[node] = true;
        console.log(node);
        let neighbors = this.adjacentList[node];
        for (let neighbor of neighbors) {
            if (!visited[neighbor]) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }
}

const graph = new Graph();

graph.addVertex('1');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addVertex('8');

graph.addEdge('3', '5');
graph.addEdge('6', '3');
graph.addEdge('1', '6');
graph.addEdge('1', '3');
graph.addEdge('1', '4');
graph.addEdge('4', '8');
graph.addEdge('4', '5');

console.log(graph.showConnections());


