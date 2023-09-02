import { cells } from '/src/scripts/eventHandlers/eventManager.js';


export function setupDoubleClickEvents() {
    cells.forEach(cell => {
        cell.addEventListener('dblclick', () => {
            if (cell.textContent !== '') {
                cells.forEach(otherCell => {
                    if (otherCell !== cell && otherCell.textContent === cell.textContent) {
                        otherCell.classList.add('clicked');
                    }
                });
            }
        });
    });
}
