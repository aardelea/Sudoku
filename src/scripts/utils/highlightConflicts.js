import { removeExistingConflictHighlights } from '/src/scripts/utils/removeExistingConflictHighlights.js';
import { gatherConflictingCells } from '/src/scripts/utils/gatherConflictingCells.js';


let conflictingCells = new Set();

export function highlightConflicts() {
    removeExistingConflictHighlights();
    conflictingCells.clear();

    for (let digit = 1; digit <= 9; digit++) {
        for (let i = 0; i < 9; i++) {
            const { rowCells, colCells, boxCells, rowPencilMarks, colPencilMarks, boxPencilMarks } = gatherConflictingCells(digit, i);
            
            [rowCells, colCells, boxCells].forEach(cells => {
                if (cells.length > 1) {
                    cells.forEach(cell => {
                        cell.classList.add('conflict-highlighted');
                        conflictingCells.add(cell);
                    });
                };
            });

            [rowPencilMarks, colPencilMarks, boxPencilMarks].forEach((pmarks, idx) => {
                const filledCellsArray = [rowCells, colCells, boxCells][idx];
                if (pmarks.length >= 1 && filledCellsArray.length >= 1) {
                    pmarks.forEach(pmark => {
                        pmark.classList.add('conflict-highlighted-pmark');
                    });
                };
            });
        };
    }
}