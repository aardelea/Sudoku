export function generateEmptyStartingGrid() {
    const emptyGrid = [];

    for (let row = 0; row < 9; row++) {
      const rowArray = Array(9).fill(null);
      emptyGrid.push(rowArray);
    }

    return emptyGrid;
};