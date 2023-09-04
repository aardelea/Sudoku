import { vars } from '/src/scripts/config.js';


export function keyUp() {
    document.addEventListener('keyup', (e) => {
        vars.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;
    });
};
