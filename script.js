document.addEventListener('DOMContentLoaded', () => {
    // Create the Sudoku cells and populate with numbers
    const sudokuGrid = document.querySelector('.sudoku-grid');
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = String(row);
            cell.dataset.col = String(col);
            const num = (row * 3 + Math.floor(row / 3) + col) % 9 + 1;
            cell.textContent = num;
            sudokuGrid.appendChild(cell);
        }
    }

    // cell highlighting
    const cells = document.querySelectorAll('.cell');
    let isMouseDown = false;

    // removes all highlighting from all cells
    function deselectAllCells() {
        cells.forEach(cell => {
            cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
        });
    }

    cells.forEach(cell => {
        // we deselect all cells if this is a new selection and we highlight the cell we clicked on
        cell.addEventListener('mousedown', () => {
            if (!isMouseDown){
                deselectAllCells();
                isMouseDown = true;
            }
            cell.classList.add('clicked');
            clickedCell = cell;
        });
    
        // on mouseover we highlight other cells if the mouse button is down
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.classList.add('clicked');
            }
        });

        // when the mouse click is released, we indicate we are starting a new selection
        cell.addEventListener('mouseup', () => {
            isMouseDown = false; 
        });

        // on click, we highlight the row, column, box and cell
        cell.addEventListener('click', () => {
            const row = cell.dataset.row;
            const col = cell.dataset.col;
            const boxRow = Math.floor(row / 3);
            const boxCol = Math.floor(col / 3);

            cells.forEach(otherCell => {
                const otherRow = otherCell.dataset.row;
                const otherCol = otherCell.dataset.col;
                const otherBoxRow = Math.floor(otherRow / 3);
                const otherBoxCol = Math.floor(otherCol / 3);
        
                if (otherRow === row || otherCol === col ||
                    (otherBoxRow === boxRow && otherBoxCol === boxCol)
                ) {
                    otherCell.classList.add('highlighted-row');
                    otherCell.classList.add('highlighted-col');
                }
            });

            cell.classList.add('clicked');
            cell.classList.remove('highlighted-col');
            cell.classList.remove('highlighted-row');
        });

        // when double click on a digit, it highlights all instances of that digit in the grid
        cell.addEventListener('dblclick', () => {
            const digit = cell.textContent;
            cells.forEach(otherCell => {
                if (otherCell !== cell && otherCell.textContent === digit) {
                    otherCell.classList.add('clicked');
                }
            });
        });
    });

    // Clear highlighting when clicking outside of the grid
    document.addEventListener('click', event => {
        if (!sudokuGrid.contains(event.target)) {
            deselectAllCells();
        }
    });

});
