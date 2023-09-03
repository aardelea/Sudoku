export function generateStartingGrid() {

    const startingGrid = [];
    for (let row = 0; row < 9; row++) {
        const rowArray = [];
        for (let col = 0; col < 9; col++) {
            const num = (row * 3 + Math.floor(row / 3) + col) % 9 + 1;
            rowArray.push(num);
        };
        startingGrid.push(rowArray);
    };

    // Randomly remove numbers to leave 50 cells filled
    let cellsToRemove = 81 - 50;
    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (startingGrid[row][col] !== null) {
            startingGrid[row][col] = null;
            cellsToRemove--;
        };
    };
    
    return startingGrid;
};
