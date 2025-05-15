function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
export const buildGraph = (edges, directed = false) => {
  const graph = new Map();
  const updateGraph = (source, destination) => {
    if (graph.has(source)) {
      const node = graph.get(source);
      node.neighbors.push(destination);
    } else {
      const newNode = new Node(source, [destination]);
      graph.set(source, newNode);
    }
  }
  for (let edge of edges) {
    const [source, destination] = edge;
    updateGraph(source, destination)
    if (!directed) {
      updateGraph(destination, source)
    }
  }
  /**
   * 1 -> [2,3,4]
   * 2 -> [3,4,5]
   */
  return graph;
};
