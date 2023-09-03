import { sudokuElements } from '/src/scripts/config.js';


export function setupClickEvents() {
    sudokuElements.cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const row = cell.dataset.row;
            const col = cell.dataset.col;
            const boxRow = Math.floor(row / 3);
            const boxCol = Math.floor(col / 3);

            sudokuElements.cells.forEach(otherCell => {
                const otherRow = otherCell.dataset.row;
                const otherCol = otherCell.dataset.col;
                const otherBoxRow = Math.floor(otherRow / 3);
                const otherBoxCol = Math.floor(otherCol / 3);
        
                if (otherRow === row || otherCol === col ||
                    (otherBoxRow === boxRow && otherBoxCol === boxCol)
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
