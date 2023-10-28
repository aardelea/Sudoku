export const vars = {
    isMouseDown: false,
    sudokuGrid: document.querySelector('.sudoku-grid'),
    cells: document.querySelector('.sudoku-grid').querySelectorAll('.cell'),
    resetButton: document.getElementById('reset-button'),
    undoButton: document.getElementById('undo-button'),
    redoButton: document.getElementById('redo-button'),
    keypadButtons: document.querySelectorAll('.keypad-button'),
    digitsCentreButton: document.querySelector('.centre-button'),
    digitsNormalButton: document.querySelector('.normal-button'),
    digitsCornerButton: document.querySelector('.corner-button'),
    ctrlOrShiftPressed: false,
    cell: null,
    undoHistory: [],
    redoHistory: [],
    actionID: 0,
    isCentreText: false,
    isCornerText: false,
    buttonClicked: false,
};
