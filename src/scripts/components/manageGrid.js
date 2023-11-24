import { vars } from '/scripts/config.js';
import { generateEmptyStartingGrid } from '/scripts/components/generateEmptyStartingGrid.js';


export function manageGrid() {
    const startingGrid = generateEmptyStartingGrid();
    let uniqueID = 0;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');
            const digitText = document.createElement('span');

            cell.classList.add('cell');
            digitText.classList.add('digit-text');

            cell.dataset.row = String(row + 1);
            cell.dataset.col = String(col + 1);
            cell.dataset.id = uniqueID;
            uniqueID++;

            if (startingGrid[row][col] !== null) {
                cell.classList.add('fixed');
            };
            cell.appendChild(digitText);
            vars.sudokuGrid.appendChild(cell);
        };
    };
};
