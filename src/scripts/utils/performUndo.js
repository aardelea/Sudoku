import { vars } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performUndo(event) {
    if (vars.digits.length > 0) {
        vars.digits = vars.digits.filter(entry => {
            if (entry.actionID === vars.digits[vars.digits.length - 1].actionID) {
                entry.cell.textContent = "";
                highlightConflicts();
                return false;
            };
            return true;
        });
    };
    event.preventDefault();
};
