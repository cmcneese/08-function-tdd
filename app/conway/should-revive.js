import aliveNeighbors from './alive-neighbors';

export default function shouldRevive(neighbors) {
  return aliveNeighbors(neighbors) === 3;
}
