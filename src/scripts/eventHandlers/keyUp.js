import { pressedKeys } from '/src/scripts/config.js';


export function keyUp() {
    document.addEventListener('keyup', (e) => {
        pressedKeys.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;
    });
};
