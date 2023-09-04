import { vars } from '/src/scripts/config.js';


export function mouseUp() {
    vars.cells.forEach(cell => {
        cell.addEventListener('mouseup', () => {
            vars.isMouseDown = false; 
        });
    });
};
