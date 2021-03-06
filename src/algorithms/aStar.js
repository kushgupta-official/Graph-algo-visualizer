//here distance is f in a* algo
//f=g+h
export function aStar(grid, startNode, endNode) {
  const visitedNodesInOrder = [];
  startNode.distance =
    Math.abs(startNode.row - endNode.row) +
    Math.abs(startNode.column - endNode.column);
  // startNode.distance=0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortNodesByValueF(unvisitedNodes);
    const nextNode = unvisitedNodes.shift();
    if (nextNode.distance === Infinity) {
      return visitedNodesInOrder;
    }
    if (nextNode.isWall) {
      continue;
    }
    nextNode.isVisited = true;
    visitedNodesInOrder.push(nextNode);
    if (nextNode === endNode) {
      return visitedNodesInOrder;
    }
    updateUnvisitedNeighbours(nextNode, endNode, grid);
  }
}

function sortNodesByValueF(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function getAllNodes(grid) {
  const toReturn = [];
  for (let rows of grid) {
    for (let columns of rows) {
      toReturn.push(columns);
    }
  }
  return toReturn;
}

function updateUnvisitedNeighbours(currentNode, targetNode, grid) {
  const unvisitedNeighbours = getUnvisitedNeighbours(currentNode, grid);
  const distanceBetweenCurrentAndTarget =
    Math.abs(currentNode.row - targetNode.row) +
    Math.abs(currentNode.column - targetNode.column);
  const g_currentNode = currentNode.distance - distanceBetweenCurrentAndTarget;
  for (let ite of unvisitedNeighbours) {
    let g_ite = g_currentNode + ite.weight + 1;
    let h_ite =
      Math.abs(ite.row - targetNode.row) +
      Math.abs(ite.column - targetNode.column);
    if (ite.distance > g_ite + h_ite) {
      ite.distance = g_ite + h_ite;
      ite.previousNode = currentNode;
    }
  }
  return unvisitedNeighbours;
}

// function updateUnvisitedNeighbours(currentNode, targetNode, grid) {
//   const unvisitedNeighbours = getUnvisitedNeighbours(currentNode, grid);
//   const distanceBetweenCurrentAndTarget =
//     currentNode.distance -
//     (Math.abs(currentNode.row - targetNode.row) +
//       Math.abs(currentNode.column - targetNode.column));
//   // const distanceBetweenCurrentAndTarget = currentNode.distance;
//   for (let ite of unvisitedNeighbours) {
//     if (
//       ite.distance >
//       distanceBetweenCurrentAndTarget +
//         ite.weight +
//         Math.abs(ite.row - targetNode.row) +
//         Math.abs(ite.column - targetNode.column)
//     ) {
//       ite.distance =
//         distanceBetweenCurrentAndTarget +
//         ite.weight +
//         Math.abs(ite.row - targetNode.row) +
//         Math.abs(ite.column - targetNode.column);
//       ite.previousNode = currentNode;
//     }
//   }
//   return unvisitedNeighbours;
// }

function getUnvisitedNeighbours(currentNode, grid) {
  const unvisitedNeighbours = [];
  const { row, column } = currentNode;
  if (row - 1 >= 0 && grid[row - 1][column].isVisited !== true)
    unvisitedNeighbours.push(grid[row - 1][column]);

  if (row + 1 < grid.length && grid[row + 1][column].isVisited !== true)
    unvisitedNeighbours.push(grid[row + 1][column]);

  if (column - 1 >= 0 && grid[row][column - 1].isVisited !== true)
    unvisitedNeighbours.push(grid[row][column - 1]);

  if (column + 1 < grid[0].length && grid[row][column + 1].isVisited !== true)
    unvisitedNeighbours.push(grid[row][column + 1]);

  return unvisitedNeighbours;
}

export function getShortestPathAstar(grid, startNode, endNode) {
  const shortestPath = [];
  let previous = endNode.previousNode;
  if (previous === null) {
    return shortestPath;
  }
  while (previous !== startNode) {
    shortestPath.push(previous);
    previous = previous.previousNode;
  }
  shortestPath.reverse();
  return shortestPath;
}

export function getWeightOfShortestPathAstar(grid, shortestPath) {
  let weightOfPath = 0;
  for (let ite of shortestPath) {
    if (ite.weight === 0) {
      weightOfPath = weightOfPath + 1;
    } else {
      weightOfPath = weightOfPath + ite.weight + 1;
    }
  }
  return weightOfPath;
}
