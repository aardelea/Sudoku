import { sudokuElements } from '/src/scripts/config.js';


export function highlightConflicts(digit, originCell) {
    const originRow = parseInt(originCell.dataset.row, 10);
    const originCol = parseInt(originCell.dataset.col, 10);
    const boxRowOrigin = Math.floor(originRow / 3) * 3;
    const boxColOrigin = Math.floor(originCol / 3) * 3;

    sudokuElements.cells.forEach(cell => {
        const row = parseInt(cell.dataset.row, 10);
        const col = parseInt(cell.dataset.col, 10);
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;

        if (
            cell != originCell &&
            cell.textContent === digit &&
            (
                row === originRow ||
                col === originCol ||
                (boxRow === boxRowOrigin && boxCol === boxColOrigin)
            )
        ) {
            cell.classList.add('conflict-highlighted');
            originCell.classList.add('conflict-highlighted');
        }
    });
};
