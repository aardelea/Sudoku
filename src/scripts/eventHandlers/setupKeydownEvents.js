import { sudokuElements, pressedKeys, mostRecentActiveCell } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { moveActiveCell } from '/src/scripts/utils/moveActiveCell.js';
import { updateMostRecentActiveCell } from '/src/scripts/eventHandlers/setupMouseDownEvents.js';


export function setupKeydownEvents() {

    updateMostRecentActiveCell();

    document.addEventListener('keydown', (e) => {
        pressedKeys.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;

        if (/[1-9]/.test(e.key)) {
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = e.key;
                    cell.classList.add('user-digit');
                    mostRecentActiveCell.enteredDigitsHistory.push({ cell:cell, digit:e.key });
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

        if (e.code === 'Delete') {
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && cell.classList.contains('user-digit')) {
                    cell.textContent = '';
                    cell.classList.remove('user-digit');
                    highlightConflicts('', cell);
                };
            });
        };

    });

};
