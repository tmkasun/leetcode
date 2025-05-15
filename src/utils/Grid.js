export function printGrid(grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let table = ``;
  for (let row = 0; row < numRows; row++) {
    if (row === 0) {
      table += `┌${"─────┐".repeat(numCols)}\n`;
    } else {
      table += `├${"─────┐".repeat(numCols)}\n`;
    }
    const rowItems = [];
    for (let col = 0; col < numCols; col++) {
      const currentItem = grid[row][col];
      if (col === 0) {
        rowItems.push(`│  ${currentItem}  │`);
      } else {
        rowItems.push(` ${currentItem} │`);
      }
    }
    table += `${rowItems.join("  ")}\n`;
    if (row === numRows - 1) {
      table += `└──${"────".repeat(numCols)}───────┘`;
    }
  }
  console.log(table);
}
