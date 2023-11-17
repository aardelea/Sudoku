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
            return {
                ...entry,
                prevContent: entry.cell.innerHTML,
                actionID: vars.actionID
            };
        });

        vars.undoHistory.push(...entriesToUndoModified);

        entriesToUndo.forEach(entry => {
            entry.cell.innerHTML = entry.newContent;
            highlightConflicts();
        });

        vars.redoHistory = vars.redoHistory.filter(entry => entry.actionID !== lastActionID);
    }
    event.preventDefault();
}

export function redoButton() {
    vars.redoButton.addEventListener('click', performRedo);
};
