//           10
//        /     \
//      14      30
//     / \     / \
//   10  15  25   35


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) { //izquierda
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) { // derecha
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
                return this;
            }
        }
    }

    search(value) {
        let tree = this.root;

        if (tree == null)  return "El elemento no se encuentra.";

        if (tree.value > value) {
            return tree.left.value;
        }

        if (tree.value < value) {
            return tree.right.value;
        }
        
        // while(true) {
        //     if (tree.value == value) return tree;
        //     if (value < tree.value) {
        //         if (tree.left == null) return "El elemento no se encuentra.";
        //         tree = tree.left;
        //         return tree;
        //     }
        //     else {
        //         if (tree.right == null) return "El elemento no se encuentra.";
        //         tree = tree.right;
        //         return tree;
        //     }
        // }
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(4);
binarySearchTree.insert(20);

// console.log(binarySearchTree.insert(20));

// binarySearchTree.insert(2);
// binarySearchTree.insert(8);
// binarySearchTree.insert(17);
// binarySearchTree.insert(170);

console.log(binarySearchTree.search(20));
