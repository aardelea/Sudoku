import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { adjustFontSize } from '/src/scripts/utils/adjustFontSize.js';


export function updateCell(digit, event=null) {
    vars.actionID++;
    let entriesToUpdate = [];

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
            let prevContent = cell.textContent;

            if (vars.isCentreText) {
                const currentDigits = Array.from(cell.querySelectorAll('.center-text')).map(span => span.textContent);
                
                if (currentDigits.includes(digit)) {
                    const index = currentDigits.indexOf(digit);
                    currentDigits.splice(index, 1);
                } else {
                    currentDigits.push(digit);
                }
                
                currentDigits.sort();
            
                cell.innerHTML = currentDigits.map(d => `<span class="center-text">${d}</span>`).join('');
            
                cell.classList.add('center-text');
                adjustFontSize(cell, currentDigits.length);
            } else {
                cell.textContent = digit;
                cell.classList.remove('center-text');
                cell.style.fontSize = '';
            }

            cell.classList.add('user-digit');
            entriesToUpdate.push({ cell: cell, prevDigit: prevContent, newDigit: cell.textContent, actionID: vars.actionID });
            highlightConflicts();
        }
    });

    vars.undoHistory.push(...entriesToUpdate);

    vars.redoHistory = [];
    if (event) event.preventDefault();
}