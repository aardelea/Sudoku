export const vars = {
    isMouseDown: false,
    sudokuGrid: document.querySelector('.sudoku-grid'),
    cells: document.querySelector('.sudoku-grid').querySelectorAll('.cell'),
    resetButton: document.getElementById('reset-button'),
    undoButton: document.getElementById('undo-button'),
    redoButton: document.getElementById('redo-button'),
    keypadButtons: document.querySelectorAll('.keypad-button'),
    ctrlOrShiftPressed: false,
    cell: null,
    undoHistory: [],
    redoHistory: [],
    actionID: 0,
};
