import { mouseState, pressedKeys } from '/src/scripts/config.js';
import { deselectAllCells } from '/src/scripts/utils/deselectAllCells.js';


export function setupMouseDownEvents() {
    document.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('cell')) {
            mouseState.isMouseDown = true;
            if (!pressedKeys.ctrlOrShiftPressed) {
                deselectAllCells();
            };
            e.target.classList.add('clicked');
            e.target.focus();
        };
    });
};
