import { vars } from '/src/scripts/config.js';
import { deselectAllCells } from '/src/scripts/utils/deselectAllCells.js';
import { removeSharedEdges } from '/src/scripts/utils/removeSharedEdges.js';


export function moveActiveCell(activeCell, direction, keepPrevious) {
    const row = parseInt(activeCell.dataset.row, 10);
    const col = parseInt(activeCell.dataset.col, 10);
    let newRow = row, newCol = col;

    switch (direction) {
        case 'ArrowUp': newRow = row === 1 ? 9 : row - 1; break;
        case 'ArrowDown': newRow = row === 9 ? 1 : row + 1; break;
        case 'ArrowLeft': newCol = col === 1 ? 9 : col - 1; break;
        case 'ArrowRight': newCol = col === 9 ? 1: col + 1; break;
    };
  
    const newActiveCell = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);

    if (!keepPrevious) {
        deselectAllCells();
    };
    newActiveCell.classList.add('clicked');
    newActiveCell.focus();
    vars.cell = newActiveCell;

    removeSharedEdges();
};
