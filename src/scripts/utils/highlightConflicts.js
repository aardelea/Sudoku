import { vars } from '/src/scripts/config.js';


let conflictingCells = new Set();


export function highlightConflicts() {
    vars.cells.forEach(cell => cell.classList.remove('conflict-highlighted'));
    conflictingCells.clear();
  
    for (let digit = 1; digit <= 9; digit++) {
        for (let i = 0; i < 9; i++) {
            const rowCells = [], colCells = [], boxCells = [];

            for (let j = 0; j < 9; j++) {
                const rowCell = vars.cells[i * 9 + j];
                const colCell = vars.cells[j * 9 + i];
                const boxCell = vars.cells[Math.floor(i / 3) * 27 + (i % 3) * 3 + Math.floor(j / 3) * 9 + j % 3];

                if (rowCell.textContent === String(digit)) rowCells.push(rowCell);
                if (colCell.textContent === String(digit)) colCells.push(colCell);
                if (boxCell.textContent === String(digit)) boxCells.push(boxCell);
            };

            [rowCells, colCells, boxCells].forEach(cells => {
                if (cells.length > 1) {
                    cells.forEach(cell => {
                        cell.classList.add('conflict-highlighted');
                        conflictingCells.add(cell);
                    });
                };
            });
        };
    };
};
