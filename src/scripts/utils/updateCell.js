import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function updateCell(digit, event=null) {
    vars.actionID++;

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
            let prevContent = cell.textContent;
            
            if (vars.isCentreText) {
                if (cell.textContent.includes(digit)) {
                    cell.textContent = cell.textContent.replace(digit, '');
                } else {
                    cell.textContent += digit;
                }
                cell.textContent = Array.from(cell.textContent).sort().join('');
                cell.classList.add('center-text');
            } else {
                cell.textContent = digit;
                cell.classList.remove('center-text');
            }

            cell.classList.add('user-digit');
            vars.undoHistory.push({ cell: cell, prevDigit: prevContent, newDigit: cell.textContent, actionID: vars.actionID });
            highlightConflicts();
        }
    });

    vars.redoHistory = [];
    if (event) event.preventDefault();
};
