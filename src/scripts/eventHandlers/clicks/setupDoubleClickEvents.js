import { sudokuElements } from '/src/scripts/eventHandlers/eventManager.js';


export function setupDoubleClickEvents() {
    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('dblclick', () => {
            if (cell.textContent !== '') {
                sudokuElements.cells.forEach(otherCell => {
                    if (otherCell !== cell && otherCell.textContent === cell.textContent) {
                        otherCell.classList.add('clicked');
                    }
                });
            }
        });
    });
}
