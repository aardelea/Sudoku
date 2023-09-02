import { sudokuElements } from '/src/scripts/eventHandlers/eventManager.js';
import { solverState } from '/src/scripts/components/buttons/manageButtons.js';


export function setupEditMode() {
    sudokuElements.sudokuGrid.addEventListener('click', (event) => {
        if (solverState.activeMode === "Solver") {
            const clickedCell = event.target;
            if (!clickedCell.classList.contains('fixed')) {
                clickedCell.focus();
            }
        }
    });
}
