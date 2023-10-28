import { vars } from '/src/scripts/config.js';


export function clickHighlighting() {
    vars.cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const row = parseInt(cell.dataset.row, 10);
            const col = parseInt(cell.dataset.col, 10);
            const startRow = Math.floor((row - 1) / 3) * 3 + 1;
            const startCol = Math.floor((col - 1) / 3) * 3 + 1;
            const endRow = startRow + 2;
            const endCol = startCol + 2;

        });
    });
};
