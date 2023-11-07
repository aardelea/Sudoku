import { vars } from '/src/scripts/config.js';


export function addSymbolToBorder(cell, direction, grid) {
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    let preventSymbol = false;
    if (direction === 'bottom' && row < 9) {
        const cellBelow = grid.querySelector(`.cell[data-row="${row + 1}"][data-col="${col}"]`);
        if (cellBelow && cellBelow.querySelector('.symbol-top')) {
            preventSymbol = true;
        };
    } else if (direction === 'top' && row > 1) {
        const cellAbove = grid.querySelector(`.cell[data-row="${row - 1}"][data-col="${col}"]`);
        if (cellAbove && cellAbove.querySelector('.symbol-bottom')) {
            preventSymbol = true;
        };
    }else if (direction === 'right' && col < 9) {
        const cellRight = grid.querySelector(`.cell[data-row="${row}"][data-col="${col + 1}"]`);
        if (cellRight && cellRight.querySelector('.symbol-left')) {
            preventSymbol = true;
        };
    } else if (direction === 'left' && col > 1) {
        const cellLeft = grid.querySelector(`.cell[data-row="${row}"][data-col="${col - 1}"]`);
        if (cellLeft && cellLeft.querySelector('.symbol-right')) {
            preventSymbol = true;
        };
    };

    if (preventSymbol) {
        return;
    };

    const cellContent = cell.querySelector('.fixed, .user-digit');

    if (cell.querySelector(`.symbol-${direction}`)) {
        cell.removeChild(cell.querySelector(`.symbol-${direction}`));
    } else {
        const symbolMarker = document.createElement('div');
        symbolMarker.classList.add('symbol-marker', `symbol-${direction}`);
        symbolMarker.textContent = vars.puzzleSetterCurrentSymbol;
        if (cellContent) {
            cell.insertBefore(symbolMarker, cellContent);
        } else {
            cell.appendChild(symbolMarker);
        }
    };
};