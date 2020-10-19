export function dfs(grid, startNode, endNode) {
  const visitedNodesInOrder = [];
  const stack = [];
  startNode.isVisited = true;
  stack.push(startNode);
  while (!!stack.length) {
    const nextNode = stack.pop();
    if (nextNode.isWall === true) {
      continue;
    }
    visitedNodesInOrder.push(nextNode);
    if (nextNode === endNode) {
      return visitedNodesInOrder;
    }
    pushNeighboursOfNode(grid, stack, nextNode);
  }
  return visitedNodesInOrder;
}

function pushNeighboursOfNode(grid, stack, node) {
  const neighboursOfNode = getNeighboursOfNode(grid, node);
  for (let ite of neighboursOfNode) {
    if (ite.previousNode===null){
      ite.previousNode = node;
    }
    ite.isVisited = true;
    stack.push(ite);
  }
}

function getNeighboursOfNode(grid, node) {
  const unvisitedNeighbours = [];
  const row = node.row;
  const column = node.column;

  if (row - 1 >= 0 && grid[row - 1][column].isVisited === false) {
    unvisitedNeighbours.push(grid[row - 1][column]);
  }
  if (column - 1 >= 0 && grid[row][column - 1].isVisited === false) {
    unvisitedNeighbours.push(grid[row][column - 1]);
  }
  if (row + 1 < grid.length && grid[row + 1][column].isVisited === false) {
    unvisitedNeighbours.push(grid[row + 1][column]);
  }
  if (
    column + 1 < grid[0].length &&
    grid[row][column + 1].isVisited === false
  ) {
    unvisitedNeighbours.push(grid[row][column + 1]);
  }

  return unvisitedNeighbours;
}

export function getPathDFS(grid, startNode, endNode) {
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

export function getWeightOfPathDFS(grid, path) {
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
