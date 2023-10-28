import { vars } from '/src/scripts/config.js';


export function mouseUp() {
    document.addEventListener('mouseup', () => {
        vars.isMouseDown = false;
    });
}