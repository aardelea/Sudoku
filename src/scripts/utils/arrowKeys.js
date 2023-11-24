import { vars } from '/scripts/config.js';
import { moveActiveCell } from '/scripts/utils/moveActiveCell.js';
import { removeSharedEdges } from '/scripts/utils/removeSharedEdges.js';


export function arrowKeys(event) {
    vars.ctrlOrShiftPressed = event.ctrlKey || event.shiftKey;

    if (Array.from(vars.cells).find(cell => cell.classList.contains('clicked'))) {
        const newCell = moveActiveCell(vars.cell, event.key, vars.ctrlOrShiftPressed);

        if (newCell) {
            newCell.classList.add('clicked');
            newCell.focus();
            removeSharedEdges();
            vars.cell = newCell;
        };
    };
};