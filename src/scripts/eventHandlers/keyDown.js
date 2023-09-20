import { updateMostRecentActiveCell } from '/src/scripts/eventHandlers/mouseDown.js';
import { performUndo } from '/src/scripts/utils/performUndo.js';
import { updateCell } from '/src/scripts/utils/updateCell.js';
import { arrowKeys } from '/src/scripts/utils/arrowKeys.js';
import { vars } from '/src/scripts/config.js';


export function keyDown() {

    updateMostRecentActiveCell();

    document.addEventListener('keydown', (event) => {
        vars.ctrlOrShiftPressed = event.ctrlKey || event.shiftKey;
        
        if (/[1-9]/.test(event.key)) {
            updateCell(event.key, event)
        } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)){
            arrowKeys(event=event);
        } else if (event.code === 'Delete') {
            deleteKey()
        } else if (event.ctrlKey && event.key === 'z') {
            performUndo(event=event);
        };

    });

};
