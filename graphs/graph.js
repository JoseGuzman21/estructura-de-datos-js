/*
      2  - 0
     / \
    1 - 3
*/

const graph1 = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
];

// adjancent list
//          0          1    
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graphObject = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}

//Adjancent Matrix
const graphMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];

const graphMatrixObject = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}