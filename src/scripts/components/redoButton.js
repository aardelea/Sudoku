import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { adjustFontSize } from '/src/scripts/utils/adjustFontSize.js';
import { removeColoursFromCell } from '/src/scripts/utils/removeColoursFromCell.js';


export function performRedo(event) {
    if (vars.redoHistory.length > 0) {
        vars.actionID++;
        const lastActionID = vars.redoHistory[vars.redoHistory.length - 1].actionID;
        const entriesToUndo = vars.redoHistory.filter(entry => entry.actionID === lastActionID);

        const entriesToUndoModified = entriesToUndo.map(entry => {
            const currentContent = entry.cell.innerHTML;
            const currentColorClass = Array.from(entry.cell.classList).find(cls => cls.startsWith('colour-'));
            const currentColor = currentColorClass ? currentColorClass.split('-')[1] : null;
            
            return {
                ...entry,
                prevDigit: entry.cell.textContent,
                prevContent: currentContent,
                prevColor: currentColor,
                actionID: vars.actionID
            };
        });

        vars.undoHistory.push(...entriesToUndoModified);

        entriesToUndo.forEach(entry => {
            entry.cell.innerHTML = entry.prevContent;

            removeColoursFromCell(entry.cell);
            if (entry.newColor) {
                entry.cell.classList.add(`colour-${entry.newColor}`);
                entry.cell.classList.add('colour-text');
            }
            
            highlightConflicts();
            adjustFontSize(entry.cell, Array.from(entry.cell.querySelectorAll('.center-text')).length);
        });

        vars.redoHistory = vars.redoHistory.filter(entry => entry.actionID !== lastActionID);
    }
    event.preventDefault();
}

export function redoButton() {
    vars.redoButton.addEventListener('click', performRedo);
};
