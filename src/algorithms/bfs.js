export function bfs(grid, startNode, endNode) {
  const visitedNodesInOrder = [];
  startNode.isVisited = true;
  //    const unvisitedNodes=extractAllNodes(grid);
  const queue = [];
  queue.push(startNode);
  while (!!queue.length) {
    const currNode = queue.shift();
    if (currNode === endNode) {
      return visitedNodesInOrder;
    }
    if (currNode.isWall) {
      continue;
    }
    visitedNodesInOrder.push(currNode);
    pushNeighboursOfCurrentNode(grid, queue, currNode);
  }
  return visitedNodesInOrder;
}

function pushNeighboursOfCurrentNode(grid, queue, currNode) {
  const neighboursOfCurrentNode = getNeighboursOfCurrentNode(grid, currNode);
  for (let node of neighboursOfCurrentNode) {
    node.isVisited = true;
    node.previousNode = currNode;
    queue.push(node);
  }
}

function getNeighboursOfCurrentNode(grid, currNode) {
  const toReturn = [];
  const row = currNode.row;
  const column = currNode.column;

  if (row - 1 >= 0 && !grid[row - 1][column].isVisited)
    toReturn.push(grid[row - 1][column]);

  if (column - 1 >= 0 && !grid[row][column - 1].isVisited)
    toReturn.push(grid[row][column - 1]);

  if (row + 1 < grid.length && !grid[row + 1][column].isVisited)
    toReturn.push(grid[row + 1][column]);

  if (column + 1 < grid[0].length && !grid[row][column + 1].isVisited)
    toReturn.push(grid[row][column + 1]);

  return toReturn;
}

// function extractAllNodes(grid){
//     const toReturn=[];
//     for (let row of grid){
//         for (let column of row){
//             toReturn.push(column);
//         }
//     }
//     return toReturn;
// }

export function getPathBFS(grid, startNode, endNode) {
  const path = [];
  let previous = endNode.previousNode;
  if (previous === null) {
    return path;
  }
  while (previous !== startNode) {
    path.push(previous);
    previous = previous.previousNode;
  }
  path.reverse();
  return path;
}

export function getWeightOfShortestPathBFS(grid, path) {
  let weightOfPath = 0;
  for (let ite of path) {
    if (ite.weight === 0) {
      weightOfPath = weightOfPath + 1;
    } else {
      weightOfPath = weightOfPath + ite.weight + 1;
    }
  }
  return weightOfPath;
}
