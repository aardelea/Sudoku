import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performUndo(event) {
    if (vars.undoHistory.length > 0) {
        vars.undoHistory = vars.undoHistory.filter(entry => {
            if (entry.actionID === vars.undoHistory[vars.undoHistory.length - 1].actionID) {
                entry.cell.textContent = "";
                highlightConflicts();
                return false;
            };
            return true;
        });
    };
    event.preventDefault();
};
