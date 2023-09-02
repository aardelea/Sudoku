import { sudokuElements } from '/src/scripts/eventHandlers/eventManager.js';


export function setupKeydownEvents() {
    document.addEventListener('keydown', (e) => {
        if (/[1-9]/.test(e.key)) {
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
