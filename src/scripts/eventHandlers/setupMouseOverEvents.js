import { sudokuElements, mouseState } from '/src/scripts/eventHandlers/manageEvents.js';


export function setupMouseOverEvents() {
    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (mouseState.isMouseDown) {
                cell.classList.add('clicked');
            }
        });
    });
}
