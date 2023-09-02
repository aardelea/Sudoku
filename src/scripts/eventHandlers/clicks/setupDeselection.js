import { sudokuGrid } from '/src/scripts/eventHandlers/eventManager.js';
import { deselectAllCells } from '/src/scripts/eventHandlers/utils.js';


export function setupDeselection() {
    // Clear highlighting when clicking outside of the grid
    document.addEventListener('click', event => {
        if (!sudokuGrid.contains(event.target)) {
            deselectAllCells();
        }
    });
}