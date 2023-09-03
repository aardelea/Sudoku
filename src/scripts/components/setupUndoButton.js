import { buttons, mostRecentActiveCell } from '/src/scripts/config.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


export function setupUndoButton() {
    buttons.undoButton.addEventListener('click', () => {
        if (mostRecentActiveCell.enteredDigitsHistory.length > 0) {
            const lastEntry = mostRecentActiveCell.enteredDigitsHistory.pop();
            lastEntry.cell.textContent = "";
            highlightConflicts()
        };
    });
};
