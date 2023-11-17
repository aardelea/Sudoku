import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { updateCellText } from '/src/scripts/utils/updateCellText.js';
import { updateCellColor } from '/src/scripts/utils/updateCellColor.js';


export function updateCell(digit, event=null) {
    vars.actionID++;

    vars.cells.forEach(cell => {
        if (cell.classList.contains('clicked')) {
            let prevContent = cell.innerHTML;

            if (vars.isColourText) {
                updateCellColor(cell, digit);
            } else if(vars.puzzleStartingPosition){
                updateCellText(cell, digit);
                cell.classList.add('fixed');
                highlightConflicts();
            } else if (!cell.classList.contains('fixed')) {
                updateCellText(cell, digit);
                cell.classList.add('user-digit');
                highlightConflicts();
            };

            vars.undoHistory.push({
                cell: cell,
                prevContent: prevContent,
                actionID: vars.actionID
            });
        };
    });

    vars.redoHistory = [];
    if (event) event.preventDefault();
};