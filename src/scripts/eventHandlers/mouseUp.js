import { vars } from '/scripts/config.js';


export function mouseUp() {
    document.addEventListener('mouseup', () => {
        vars.isMouseDown = false;
    });
}