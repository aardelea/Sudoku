import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performUndo(event) {
    if (vars.undoHistory.length > 0) {
        vars.actionID++;
        const lastActionID = vars.undoHistory[vars.undoHistory.length - 1].actionID;
        const entriesToRedo = vars.undoHistory.filter(entry => entry.actionID === lastActionID);

        const entriesToRedoModified = entriesToRedo.map(entry => ({
            ...entry,
            prevDigit: entry.cell.textContent,
            actionID: vars.actionID
        }));

        vars.redoHistory.push(...entriesToRedoModified);

        entriesToRedo.forEach(entry => {
            entry.cell.textContent = entry.prevDigit;
            highlightConflicts();
        });

        vars.undoHistory = vars.undoHistory.filter(entry => entry.actionID !== lastActionID);
    }
    event.preventDefault();
}


export function undoButton() {
    vars.undoButton.addEventListener('click', performUndo);
};
