import { vars } from '/src/scripts/config.js';
import { moveActiveCell } from '/src/scripts/utils/moveActiveCell.js';


export function arrowKeys(event) {
    vars.ctrlOrShiftPressed = event.ctrlKey || event.shiftKey;
    if (Array.from(vars.cells).find(cell => cell.classList.contains('clicked'))) {
        moveActiveCell(vars.cell, event.key, vars.ctrlOrShiftPressed);
    };
};
