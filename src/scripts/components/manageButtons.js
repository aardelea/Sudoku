import { resetButton } from '/src/scripts/components/resetButton.js';
import { deleteButton } from '/src/scripts/components/deleteButton.js';
import { undoButton } from '/src/scripts/components/undoButton.js';
import { redoButton } from '/src/scripts/components/redoButton.js';


export function manageButtons() {
    resetButton();
    deleteButton();
    undoButton();
    redoButton();
};
