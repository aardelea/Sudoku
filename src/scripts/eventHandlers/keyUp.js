import { vars } from '/scripts/config.js';


export function keyUp() {
    document.addEventListener('keyup', (e) => {
        vars.ctrlOrShiftPressed = e.ctrlKey || e.shiftKey;

        if (e.key === 'Shift' || e.key === 'Alt' || e.key === 'Control') {
            vars.digitsNormalButton.click();
        }
    });
};
