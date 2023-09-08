import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performUndo(event) {
    if (vars.undoHistory.length > 0) {
        const lastActionID = vars.undoHistory[vars.undoHistory.length - 1].actionID;
        const entriesToRedo = vars.undoHistory.filter(entry => entry.actionID === lastActionID);

        vars.redoHistory.push(...entriesToRedo);
        
        vars.undoHistory = vars.undoHistory.filter(entry => {
            if (entry.actionID === lastActionID) {
                entry.cell.textContent = "";
                highlightConflicts();
                return false;
            };
            return true;
        });
    };
    event.preventDefault();
};
