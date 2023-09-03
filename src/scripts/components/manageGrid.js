import { generateStartingGrid } from '/src/scripts/components/generateStartingGrid.js';


export function manageGrid() {
    const sudokuGrid = document.querySelector('.sudoku-grid');
    const startingGrid = generateStartingGrid();

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');

            cell.classList.add('cell');
            cell.dataset.row = String(row);
            cell.dataset.col = String(col);
            if (startingGrid[row][col] !== null) {
                cell.textContent = startingGrid[row][col];
                cell.classList.add('fixed');
            }
            sudokuGrid.appendChild(cell);
        }
    }
}
