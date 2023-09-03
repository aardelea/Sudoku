import { sudokuElements } from '/src/scripts/config.js';
import { deselectAllCells } from '/src/scripts/utils.js';


export function setupDeselection() {
    // Clear highlighting when clicking outside of the grid
    document.addEventListener('click', event => {
        if (!sudokuElements.sudokuGrid.contains(event.target)) {
            deselectAllCells();
        }
    });
};
