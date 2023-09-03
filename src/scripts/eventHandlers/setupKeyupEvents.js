import { pressedKeys } from '/src/scripts/config.js';


export function setupKeyupEvents() {
    document.addEventListener('keyup', (e) => {
        pressedKeys.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;
    });
};
