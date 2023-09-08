import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performRedo(event) {
    if (vars.redoHistory.length > 0) {
        const lastActionID = vars.redoHistory[vars.redoHistory.length - 1].actionID;
        const entriesToUndo = vars.redoHistory.filter(entry => entry.actionID === lastActionID);

        vars.undoHistory.push(...entriesToUndo);

        entriesToUndo.forEach(entry => {
            entry.cell.textContent = entry.digit;
        });

        vars.redoHistory = vars.redoHistory.filter(entry => entry.actionID !== lastActionID);

        highlightConflicts();
    };

    event.preventDefault();
};
