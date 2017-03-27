export default function aliveNeighbors(neighbors) {
  let num = 0;

  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i]) {
      num = num + 1;
    }
  }

  return num;
}
