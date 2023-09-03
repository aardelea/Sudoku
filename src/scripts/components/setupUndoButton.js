import { buttons, mostRecentActiveCell } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function setupUndoButton() {
    buttons.undoButton.addEventListener('click', () => {
        if (mostRecentActiveCell.enteredDigitsHistory.length > 0) {
            mostRecentActiveCell.enteredDigitsHistory = mostRecentActiveCell.enteredDigitsHistory.filter(entry => {
                if (entry.actionID === mostRecentActiveCell.enteredDigitsHistory[mostRecentActiveCell.enteredDigitsHistory.length - 1].actionID) {
                    entry.cell.textContent = "";
                    highlightConflicts();
                    return false;
                };
                return true;
            });
        };
    });
};
