import { updateMostRecentActiveCell } from '/src/scripts/eventHandlers/mouseDown.js';
import { performUndo } from '/src/scripts/utils/performUndo.js';
import { numericKeypress } from '/src/scripts/utils/numericKeypress.js';
import { arrowKeys } from '/src/scripts/utils/arrowKeys.js';


export function keyDown() {

    updateMostRecentActiveCell();

    document.addEventListener('keydown', (event) => {
        
        if (/[1-9]/.test(event.key)) {
            numericKeypress(event=event);
        } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)){
            arrowKeys(event=event);
        } else if (event.code === 'Delete') {
            deleteKey()
        } else if (event.ctrlKey && event.key === 'z') {
            performUndo(event=event);
        };

    });

};
