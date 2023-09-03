import { sudokuElements, mouseState } from '/src/scripts/config.js';


export function setupMouseOverEvents() {
    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (mouseState.isMouseDown) {
                cell.classList.add('clicked');
            };
        });
    });
};
