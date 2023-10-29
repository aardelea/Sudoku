import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function deleteKey() {
    vars.actionID++;
    const entriesToDelete = [];
    
    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && cell.classList.contains('user-digit')) {
            entriesToDelete.push({
                cell: cell,
                prevDigit: cell.textContent,
                prevContent: cell.innerHTML,
                actionID: vars.actionID
            });
            
            cell.textContent = '';
            cell.classList.remove('user-digit');
            highlightConflicts('', cell);
        }
    });

    vars.undoHistory.push(...entriesToDelete);

};