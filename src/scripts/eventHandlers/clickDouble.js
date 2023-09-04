import { vars } from '/src/scripts/config.js';


export function clickDouble() {
    vars.cells.forEach(cell => {
        cell.addEventListener('dblclick', () => {
            if (cell.textContent !== '') {
                vars.cells.forEach(otherCell => {
                    if (otherCell !== cell && otherCell.textContent === cell.textContent) {
                        otherCell.classList.add('clicked');
                    };
                });
            };
        });
    });
};
