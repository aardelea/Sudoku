export const mouseState = {
    isMouseDown: false
};

export const sudokuElements = {
    sudokuGrid: document.querySelector('.sudoku-grid'),
    cells: document.querySelector('.sudoku-grid').querySelectorAll('.cell'),
};

export const buttons = {
    resetButton: document.getElementById('reset-button'),
    undoButton: document.getElementById('undo-button'),
};

export const pressedKeys = {
    ctrlOrShiftPressed: false
};

export const mostRecentActiveCell = {
    cell: null,
    enteredDigitsHistory: [],
    globalCounter: 0,
};
