import { history } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function performUndo() {
    if (history.digits.length > 0) {
        history.digits = history.digits.filter(entry => {
            if (entry.actionID === history.digits[history.digits.length - 1].actionID) {
                entry.cell.textContent = "";
                highlightConflicts();
                return false;
            };
            return true;
        });
    };
};
