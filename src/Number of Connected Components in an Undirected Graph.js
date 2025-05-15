function countComponents(n, edges) {
    const adjList = {};
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    // 0 -> [1,2,3]
    // const t = Array.from({length: n}, () => [])
    for (const [n1, n2] of edges) {
        if (adjList[n1]) {
            adjList[n1].push(n2)
        } else {
            adjList[n1] = [n2]
        }
        if (adjList[n2]) {
            adjList[n2].push(n1)
        } else {
            adjList[n2] = [n1]
        }
    }
    const visited = new Set();
    let disJointGraphs = 0;

    const dfs = (node) => {
        if (visited.has(node)) {
            return
        } else {
            visited.add(node);
        }
        for (const neighbor of adjList[node]) {
            dfs(neighbor)
        }
    }
    for (const node of Object.keys(adjList)) {
        const nnode = parseInt(node);
        if (!visited.has(nnode)) {
            dfs(nnode);
            disJointGraphs += 1
        }
    }
    return disJointGraphs;
}


console.log(`Count = ${countComponents(3, [[0,1],[0,2]])}`)