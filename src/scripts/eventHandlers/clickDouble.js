import { sudokuElements } from '/src/scripts/config.js';


export function clickDouble() {
    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('dblclick', () => {
            if (cell.textContent !== '') {
                sudokuElements.cells.forEach(otherCell => {
                    if (otherCell !== cell && otherCell.textContent === cell.textContent) {
                        otherCell.classList.add('clicked');
                    };
                });
            };
        });
    });
};
