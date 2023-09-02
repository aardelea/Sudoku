import { solverState } from '../components/buttons/manageButtons.js';
import { setupMouseDownEvents } from './setupMouseDownEvents.js';
import { setupMouseOverEvents } from './setupMouseOverEvents.js';


const sudokuGrid = document.querySelector('.sudoku-grid');
export const mouseState = {
    isMouseDown: false
};
export let cells = sudokuGrid.querySelectorAll('.cell');;

export function setupEventListeners() {

    cells = sudokuGrid.querySelectorAll('.cell');

    setupMouseDownEvents();
    setupMouseOverEvents();
    setupMouseUpEvents();
    setupClickEvents();
    setupDoubleClickEvents();
    setupKeydownEvents();
    setupDeselection();
    setupEditMode()

}


export function deselectAllCells() {
    cells.forEach(cell => {
        cell.classList.remove('clicked', 'highlighted-row', 'highlighted-col');
    });
}


function setupMouseUpEvents() {
    cells.forEach(cell => {
        cell.addEventListener('mouseup', () => {
            mouseState.isMouseDown = false; 
        });
    });
}


function setupClickEvents() {
    cells.forEach(cell => {
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
    });
}


function setupDoubleClickEvents() {
    cells.forEach(cell => {
        cell.addEventListener('dblclick', () => {
            const digit = cell.textContent;
            if (digit !== '') {
                cells.forEach(otherCell => {
                    if (otherCell !== cell && otherCell.textContent === digit) {
                        otherCell.classList.add('clicked');
                    }
                });
            }
        });
    });
}


function setupKeydownEvents() {
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        if (solverState.activeMode === "Solver" && /[1-9]/.test(key)) {
            cells.forEach(cell => {
                if (cell.classList.contains('clicked') && !cell.classList.contains('fixed')) {
                    cell.textContent = key;
                    cell.classList.add('user-digit');
                }
            });
            e.preventDefault();
        }
    });
}


function setupDeselection() {
    // Clear highlighting when clicking outside of the grid
    document.addEventListener('click', event => {
        const sudokuGrid = document.querySelector('.sudoku-grid');
        if (!sudokuGrid.contains(event.target)) {
            deselectAllCells();
        }
    });
}


function setupEditMode() {
    sudokuGrid.addEventListener('click', (event) => {
        if (solverState.activeMode === "Solver") {
            const clickedCell = event.target;
            if (!clickedCell.classList.contains('fixed')) {
                clickedCell.contentEditable = true;
                clickedCell.focus();
            }
        }
    });
}
