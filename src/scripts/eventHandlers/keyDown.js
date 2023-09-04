import { sudokuElements, pressedKeys, mostRecentActiveCell, history } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { moveActiveCell } from '/src/scripts/utils/moveActiveCell.js';
import { updateMostRecentActiveCell } from '/src/scripts/eventHandlers/mouseDown.js';
import { performUndo } from '/src/scripts/utils/performUndo.js';


let actionID = 0;

export function keyDown() {

    updateMostRecentActiveCell();

    document.addEventListener('keydown', (e) => {
        pressedKeys.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;

        if (/[1-9]/.test(e.key)) {
            actionID++;
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = e.key;
                    cell.classList.add('user-digit');
                    history.digits.push({ cell: cell, digit: e.key, actionID: actionID });
                    highlightConflicts();
                };
            });
            e.preventDefault();
        };

        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            if (Array.from(sudokuElements.cells).find(cell => cell.classList.contains('clicked'))) {
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

        if (e.ctrlKey && e.key === 'z') {
            performUndo();
            e.preventDefault();
        };

    });

};
