import { sudokuElements } from '/src/scripts/eventHandlers/manageEvents.js';


export function setupEditMode() {
    sudokuElements.sudokuGrid.addEventListener('click', (event) => {
        const clickedCell = event.target;
        if (!clickedCell.classList.contains('fixed')) {
            clickedCell.focus();
        }
    });
}
