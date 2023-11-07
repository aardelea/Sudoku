export function addSymbolToBorder(cell, direction, grid) {
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    let preventX = false;
    if (direction === 'bottom' && row < 9) {
        const cellBelow = grid.querySelector(`.cell[data-row="${row + 1}"][data-col="${col}"]`);
        if (cellBelow && cellBelow.querySelector('.symbol-top')) {
            preventX = true;
        };
    } else if (direction === 'top' && row > 1) {
        const cellAbove = grid.querySelector(`.cell[data-row="${row - 1}"][data-col="${col}"]`);
        if (cellAbove && cellAbove.querySelector('.symbol-bottom')) {
            preventX = true;
        };
    }else if (direction === 'right' && col < 9) {
        const cellRight = grid.querySelector(`.cell[data-row="${row}"][data-col="${col + 1}"]`);
        if (cellRight && cellRight.querySelector('.symbol-left')) {
            preventX = true;
        };
    } else if (direction === 'left' && col > 1) {
        const cellLeft = grid.querySelector(`.cell[data-row="${row}"][data-col="${col - 1}"]`);
        if (cellLeft && cellLeft.querySelector('.symbol-right')) {
            preventX = true;
        };
    };

    if (preventX) {
        return;
    };

    if (cell.querySelector(`.symbol-${direction}`)) {
        const existingX = cell.querySelector(`.symbol-${direction}`);
        cell.removeChild(existingX);
    } else {
        const xMarker = document.createElement('div');
        xMarker.classList.add('symbol-marker', `symbol-${direction}`);
        xMarker.textContent = 'X';
        cell.appendChild(xMarker);
    };
};