import { Initi, printGrid, assert } from "./utils/index.js";
Initi();
const numIslands = function (grid) {
    printGrid(grid);
    const rows = grid.length, columns = grid[0].length;
    let islands = 0;
    const visited = Array.from({ length: rows }, () => Array.from({ length: columns }).fill(false))
    const dfs = (row, column) => {
        if (row >= rows || row < 0 || column >= columns || column < 0) {
            return
        }
        let value = grid[row][column];

        if (visited[row][column] || value !== '1') {
            return
        }
        visited[row][column] = true;
        dfs(row + 1, column);
        dfs(row - 1, column);
        dfs(row, column + 1);
        dfs(row, column - 1);

    }
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (!visited[row][column] && grid[row][column] === '1') {
                dfs(row, column)
                islands++
            }
        }
    }
    return islands;
}

// assert(numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]), 1)

// assert(numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]), 3)

assert(numIslands([["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]), 1)