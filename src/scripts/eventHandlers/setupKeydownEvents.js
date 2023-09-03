import { sudokuElements } from '/src/scripts/config.js';
import { deselectAllCells } from '/src/scripts/utils.js';
import { highlightConflicts } from '/src/scripts/eventHandlers/highlightConflicts.js';


export function setupKeydownEvents() {
    let lastSelectedRow = null;
    let lastSelectedCol = null;

    document.addEventListener('keydown', (e) => {
        if (/[1-9]/.test(e.key)) {
            sudokuElements.cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = e.key;
                    cell.classList.add('user-digit');
                    highlightConflicts(e.key, cell);
                }
            });
            e.preventDefault();
        };

        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            if (lastSelectedRow === null || lastSelectedCol === null) {
                return;
            };

            let newRow = lastSelectedRow;
            let newCol = lastSelectedCol;

            switch (e.key) {
                case 'ArrowUp':    newRow = (newRow - 1 + 9) % 9; break;
                case 'ArrowDown':  newRow = (newRow + 1) % 9; break;
                case 'ArrowLeft':  newCol = (newCol - 1 + 9) % 9; break;
                case 'ArrowRight': newCol = (newCol + 1) % 9; break;
            };

            const newCell = Array.from(sudokuElements.cells).find(cell => 
                parseInt(cell.dataset.row, 10) === newRow && 
                parseInt(cell.dataset.col, 10) === newCol
            );

            if (newCell) {
                deselectAllCells();
                newCell.classList.add('clicked');
                newCell.focus();
                lastSelectedRow = newRow;
                lastSelectedCol = newCol;
            };
        };

    });

    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            lastSelectedRow = parseInt(cell.dataset.row, 10);
            lastSelectedCol = parseInt(cell.dataset.col, 10);
        });
    });
};
