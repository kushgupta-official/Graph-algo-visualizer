export function dijkstra(grid, startNode, endNode) {
  const visitedNodeInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  console.log(unvisitedNodes);
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const nearestNode = unvisitedNodes.shift();
    nearestNode.isVisited = true;
    visitedNodeInOrder.push(nearestNode);
    if (nearestNode === endNode) {
      return visitedNodeInOrder;
    }
    updateUnvisitedNeighbours(nearestNode, grid);
    // console.log(visitedNodeInOrder);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbours(node, grid) {
  const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);
  for (const ite of unvisitedNeighbours) {
    ite.distance = node.distance + 1;
    ite.previousNode = node;
  }
  return unvisitedNeighbours;
}

function getUnvisitedNeighbours(node, grid) {
  const unvisitedNeighbours = [];
  const { row, column } = node;
  if (row - 1 >= 0 && grid[row - 1][column].isVisited !== true)
    unvisitedNeighbours.push(grid[row - 1][column]);

  if (row + 1 < grid.length - 1 && grid[row + 1][column].isVisited !== true)
    unvisitedNeighbours.push(grid[row + 1][column]);

  if (column - 1 >= 0 && grid[row][column - 1].isVisited !== true)
    unvisitedNeighbours.push(grid[row][column - 1]);

  if (
    column + 1 < grid[0].length - 1 &&
    grid[row][column + 1].isVisited !== true
  )
    unvisitedNeighbours.push(grid[row][column + 1]);

  return unvisitedNeighbours;
}

function getAllNodes(grid) {
  let nodes = [];
  for (let row of grid) {
    for (let columns of row) {
      nodes.push(columns);
    }
  }
  return nodes;
}

export function getShortestPath(grid, startNode, endNode) {
  const shortestPath = [];
  let previous = endNode.previousNode;
  while (previous !== startNode) {
    shortestPath.push(previous);
    previous = previous.previousNode;
  }
  shortestPath.reverse();
  return shortestPath;
}
