import { vars } from '/src/scripts/config.js';

let conflictingCells = new Set();

export function highlightConflicts() {
    vars.cells.forEach(cell => {
        cell.classList.remove('conflict-highlighted');
        Array.from(cell.childNodes).forEach(child => {
            if (child.nodeType !== 3 && (child.classList.contains('center-text') || child.classList.contains('corner-text') )) {
                child.classList.remove('conflict-highlighted-pmark');
            };
        });
    });

    conflictingCells.clear();

    for (let digit = 1; digit <= 9; digit++) {
        for (let i = 0; i < 9; i++) {
            const rowCells = [], colCells = [], boxCells = [];
            const rowPencilMarks = [], colPencilMarks = [], boxPencilMarks = [];

            for (let j = 0; j < 9; j++) {
                const rowCell = vars.cells[i * 9 + j];
                const colCell = vars.cells[j * 9 + i];
                const boxCell = vars.cells[Math.floor(i / 3) * 27 + (i % 3) * 3 + Math.floor(j / 3) * 9 + j % 3];

                if (rowCell.textContent === String(digit) && !rowCell.classList.contains('center-text') && !rowCell.classList.contains('corner-text')) rowCells.push(rowCell);
                if (colCell.textContent === String(digit) && !colCell.classList.contains('center-text') && !colCell.classList.contains('corner-text')) colCells.push(colCell);
                if (boxCell.textContent === String(digit) && !boxCell.classList.contains('center-text') && !boxCell.classList.contains('corner-text')) boxCells.push(boxCell);

                Array.from(rowCell.childNodes).forEach(child => {
                    if (child.nodeType !== 3 && (child.classList.contains('center-text') || child.classList.contains('corner-text')) && child.textContent === String(digit)) {
                        rowPencilMarks.push(child);
                    };
                });

                Array.from(colCell.childNodes).forEach(child => {
                    if (child.nodeType !== 3 && (child.classList.contains('center-text') || child.classList.contains('corner-text')) && child.textContent === String(digit)) {
                        colPencilMarks.push(child);
                    };
                });

                Array.from(boxCell.childNodes).forEach(child => {
                    if (child.nodeType !== 3 && (child.classList.contains('center-text') || child.classList.contains('corner-text')) && child.textContent === String(digit)) {
                        boxPencilMarks.push(child);
                    };
                });
            };

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
    };
}