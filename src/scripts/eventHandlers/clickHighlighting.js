import { vars } from '/src/scripts/config.js';


export function clickHighlighting() {
    vars.cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const row = cell.dataset.row;
            const col = cell.dataset.col;
            const startRow = Math.floor((row - 1) / 3) * 3 + 1;
            const startCol = Math.floor((col - 1) / 3) * 3 + 1;
            const endRow = startRow + 2;
            const endCol = startCol + 2;

            vars.cells.forEach(otherCell => {
                const otherRow = parseInt(otherCell.dataset.row, 10);
                const otherCol = parseInt(otherCell.dataset.col, 10);
        
                if (otherRow === row || otherCol === col ||
                    (otherRow >= startRow && otherRow <= endRow && otherCol >= startCol && otherCol <= endCol)
                ) {
                    otherCell.classList.add('highlighted-row');
                    otherCell.classList.add('highlighted-col');
                };
            });

            cell.classList.add('clicked');
            cell.classList.remove('highlighted-col');
            cell.classList.remove('highlighted-row');
        });
    });
};
