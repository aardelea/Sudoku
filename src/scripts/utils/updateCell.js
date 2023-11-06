import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { updateCellText } from '/src/scripts/utils/updateCellText.js';
import { updateCellColor } from '/src/scripts/utils/updateCellColor.js';
import { addToUndoHistory } from '/src/scripts/utils/addToUndoHistory.js';


export function updateCell(digit, event=null) {
    vars.actionID++;
    let entriesToUpdate = [];

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked')) {
            let prevContent = cell.innerHTML;
            let prevColorClass = Array.from(cell.classList).find(cls => cls.startsWith('colour-'));
            let prevColor = prevColorClass ? prevColorClass.split('-')[1] : null;

            if (vars.isColourText) {
                updateCellColor(cell, digit);
            } else if (!cell.classList.contains('fixed')) {
                updateCellText(cell, digit);
                cell.classList.add('user-digit');
                highlightConflicts();
            };

            if(vars.puzzleStartingPosition){
                cell.classList.add('fixed');
            };

            addToUndoHistory(cell, prevContent, prevColor, digit);
        };
    });

    vars.undoHistory.push(...entriesToUpdate);

    vars.redoHistory = [];
    if (event) event.preventDefault();
}