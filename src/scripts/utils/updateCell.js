import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { handleTextUpdate } from '/src/scripts/utils/handleTextUpdate.js';


export function updateCell(digit, event=null) {
    vars.actionID++;
    let entriesToUpdate = [];

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
            let prevContent = cell.innerHTML;

            if (vars.isCentreText) {
                handleTextUpdate(cell, digit, 'center-text');
            } else if (vars.isCornerText) {
                handleTextUpdate(cell, digit, 'corner-text');
            } else {
                cell.textContent = digit;
                cell.classList.remove('center-text');
                cell.classList.remove('corner-text');
                cell.style.fontSize = '';
            }

            cell.classList.add('user-digit');
            entriesToUpdate.push({ 
                cell: cell,
                prevDigit: prevContent.textContent,
                prevContent: prevContent,
                newDigit: cell.textContent,
                actionID: vars.actionID
            });
            highlightConflicts();
        }
    });

    vars.undoHistory.push(...entriesToUpdate);

    vars.redoHistory = [];
    if (event) event.preventDefault();
}