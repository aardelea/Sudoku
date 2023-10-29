import { updateMostRecentActiveCell } from '/src/scripts/eventHandlers/mouseDown.js';
import { performUndo } from '/src/scripts/components/undoButton.js';
import { performRedo } from '/src/scripts/components/redoButton.js';
import { updateCell } from '/src/scripts/utils/updateCell.js';
import { arrowKeys } from '/src/scripts/utils/arrowKeys.js';
import { deleteKey } from '/src/scripts/utils/deleteKey.js';
import { vars } from '/src/scripts/config.js';


export function keyDown() {

    updateMostRecentActiveCell();

    document.addEventListener('keydown', (event) => {
        vars.ctrlOrShiftPressed = event.ctrlKey || event.shiftKey;

        if (event.altKey) {
            event.preventDefault();
        }

        if (event.shiftKey) {
            let digit;
            switch (event.key) {
                case "!": digit = "1"; break;
                case "\"": digit = "2"; break;
                case "£": case "#": digit = "3"; break;
                case "$": digit = "4"; break;
                case "%": digit = "5"; break;
                case "^": digit = "6"; break;
                case "&": digit = "7"; break;
                case "*": digit = "8"; break;
                case "(": digit = "9"; break;
                case ")": digit = "0"; break;
            }

            if (digit) {
                updateCell(digit, event);
                return;
            }
        }
        
        if (/^[0-9]$/.test(event.key)) {
            updateCell(event.key, event)
        } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)){
            arrowKeys(event=event);
        } else if (event.code === 'Delete' || event.code === 'Backspace') {
            deleteKey()
        } else if (event.ctrlKey && event.key === 'z') {
            performUndo(event=event);
        } else if (event.ctrlKey && event.key === 'y') {
            performRedo(event=event);
        } else if (event.shiftKey || event.altKey) {
            vars.digitsCornerButton.click();
        } else if (event.ctrlKey) {
            vars.digitsCentreButton.click();
        };
        
    });

};
