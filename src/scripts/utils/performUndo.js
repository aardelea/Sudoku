import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performUndo(event) {
    if (vars.digitsHistory.length > 0) {
        vars.digitsHistory = vars.digitsHistory.filter(entry => {
            if (entry.actionID === vars.digitsHistory[vars.digitsHistory.length - 1].actionID) {
                entry.cell.textContent = "";
                highlightConflicts();
                return false;
            };
            return true;
        });
    };
    event.preventDefault();
};
