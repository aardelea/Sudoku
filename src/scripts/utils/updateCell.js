import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function updateCell(digit, event=null) {
    vars.actionID++;

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
            cell.textContent = digit;
            cell.classList.add('user-digit');

            if (vars.isCentreText) {
                cell.classList.add('small-text', 'center-text');
            } else {
                cell.classList.remove('small-text', 'center-text');
            }

            vars.undoHistory.push({ cell: cell, digit: digit, actionID: vars.actionID });
            highlightConflicts();
        }
    });

    vars.redoHistory = [];
    if (event) event.preventDefault();
};
