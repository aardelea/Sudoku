import { sudokuElements, pressedKeys, mostRecentActiveCell } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/eventHandlers/highlightConflicts.js';
import { moveActiveCell } from '/src/scripts/utils/moveActiveCell.js';


export function setupKeydownEvents() {
    let lastSelectedRow = null;
    let lastSelectedCol = null;

    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            mostRecentActiveCell.cell = cell;
        });
    });

    document.addEventListener('keydown', (e) => {
        pressedKeys.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;

        if (/[1-9]/.test(e.key)) {
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = e.key;
                    cell.classList.add('user-digit');
                    highlightConflicts();
                };
            });
            e.preventDefault();
        };

        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            const activeCell = Array.from(sudokuElements.cells).find(cell => cell.classList.contains('clicked'));
            if (activeCell) {
                moveActiveCell(mostRecentActiveCell.cell, e.key, pressedKeys.ctrlOrShiftPressed);
            };
        };

    });

    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            lastSelectedRow = parseInt(cell.dataset.row, 10);
            lastSelectedCol = parseInt(cell.dataset.col, 10);
        });
    });
};
