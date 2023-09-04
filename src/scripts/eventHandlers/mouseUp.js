import { sudokuElements, mouseState } from '/src/scripts/config.js';


export function mouseUp() {
    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('mouseup', () => {
            mouseState.isMouseDown = false; 
        });
    });
};
