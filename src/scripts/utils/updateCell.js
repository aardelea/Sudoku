import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function updateCell(digit, event=null) {
    vars.actionID++;

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
            cell.textContent = digit;
            cell.classList.add('user-digit');
            vars.undoHistory.push({ cell: cell, digit: digit, actionID: vars.actionID });
            highlightConflicts();
        }
    });

    vars.redoHistory = [];
    if (event) event.preventDefault();
};
