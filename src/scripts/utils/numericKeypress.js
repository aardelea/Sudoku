import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function numericKeypress(event) {
    vars.actionID++;
    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
            cell.textContent = event.key;
            cell.classList.add('user-digit');
            vars.digitsHistory.push({ cell: cell, digit: event.key, actionID: vars.actionID });
            highlightConflicts();
        };
    });
    event.preventDefault();
};
