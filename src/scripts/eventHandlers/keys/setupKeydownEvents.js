import { sudokuElements } from '/src/scripts/eventHandlers/eventManager.js';
import { solverState } from '/src/scripts/components/buttons/manageButtons.js';


export function setupKeydownEvents() {
    document.addEventListener('keydown', (e) => {
        if (solverState.activeMode === "Solver" && /[1-9]/.test(e.key)) {
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = e.key;
                    cell.classList.add('user-digit');
                }
            });
            e.preventDefault();
        }
    });
}
