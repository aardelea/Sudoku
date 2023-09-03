import { setupResetButton } from '/src/scripts/components/setupResetButton.js';
import { setupDeleteButton } from '/src/scripts/components/setupDeleteButton.js';
import { setupUndoButton } from '/src/scripts/components/setupUndoButton.js';


export function manageButtons() {
    setupResetButton()
    setupDeleteButton()
    setupUndoButton()
};
