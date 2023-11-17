import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { adjustFontSize } from '/src/scripts/utils/adjustFontSize.js';
import { removeColoursFromCell } from '/src/scripts/utils/removeColoursFromCell.js';


export function performUndo(event) {
    if (vars.undoHistory.length > 0) {
        vars.actionID++;
        const lastActionID = vars.undoHistory[vars.undoHistory.length - 1].actionID;
        const entriesToRedo = vars.undoHistory.filter(entry => entry.actionID === lastActionID);

        const entriesToRedoModified = entriesToRedo.map(entry => {
            const currentContent = entry.cell.innerHTML;
            const currentColorClass = Array.from(entry.cell.classList).find(cls => cls.startsWith('colour-'));
            const currentColor = currentColorClass ? currentColorClass.split('-')[1] : null;

            return {
                ...entry,
                newDigit: entry.cell.textContent,
                newContent: currentContent,
                newColor: currentColor,
                actionID: vars.actionID
            };
        });

        vars.redoHistory.push(...entriesToRedoModified);

        entriesToRedo.forEach(entry => {
            entry.cell.innerHTML = entry.prevContent;
            if (entry.prevContent.textContent !== '' && !entry.cell.classList.contains('colour-text')) {
                entry.cell.classList.add('user-digit');
            }

            removeColoursFromCell(entry.cell);
            if (entry.prevColor) {
                entry.cell.classList.add(`colour-${entry.prevColor}`);
                entry.cell.classList.add('colour-text');
            }

            highlightConflicts();
            adjustFontSize(entry.cell, Array.from(entry.cell.querySelectorAll('.center-text')).length);
        });

        vars.undoHistory = vars.undoHistory.filter(entry => entry.actionID !== lastActionID);
    }
    event.preventDefault();
}


export function undoButton() {
    vars.undoButton.addEventListener('click', performUndo);
};
