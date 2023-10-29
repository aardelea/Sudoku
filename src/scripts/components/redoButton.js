import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';
import { adjustFontSize } from '/src/scripts/utils/adjustFontSize.js';


export function performRedo(event) {
    if (vars.redoHistory.length > 0) {
        vars.actionID++;
        const lastActionID = vars.redoHistory[vars.redoHistory.length - 1].actionID;
        const entriesToUndo = vars.redoHistory.filter(entry => entry.actionID === lastActionID);

        const entriesToUndoModified = entriesToUndo.map(entry => ({
            ...entry,
            prevDigit: entry.cell.textContent,
            prevContent: entry.cell.innerHTML,
            actionID: vars.actionID
        }));

        vars.undoHistory.push(...entriesToUndoModified);

        entriesToUndo.forEach(entry => {
            entry.cell.innerHTML = entry.prevContent;
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
