export const vars = {
    isMouseDown: false,
    sudokuGrid: document.querySelector('.sudoku-grid'),
    cells: document.querySelector('.sudoku-grid').querySelectorAll('.cell'),
    resetButton: document.querySelector('.reset-button'),
    undoButton: document.querySelector('.undo-button'),
    redoButton: document.querySelector('.redo-button'),
    keypadButtons: document.querySelectorAll('.keypad-button'),
    digitsCenterButton: document.querySelector('.center-button'),
    digitsNormalButton: document.querySelector('.normal-button'),
    digitsCornerButton: document.querySelector('.corner-button'),
    digitsColourButton: document.querySelector('.colour-button'),
    homeButton: document.querySelector('.home-button'),
    myPuzzlesButton: document.querySelector('.my-puzzles-button'),
    findPuzzlesButton: document.querySelector('.find-puzzles-button'),
    setterModeButton: document.querySelector('.setter-mode-button'),
    ctrlOrShiftPressed: false,
    cell: null,
    undoHistory: [],
    redoHistory: [],
    actionID: 0,
    isCenterText: false,
    isCornerText: false,
    isColourText: false,
    buttonClicked: false,
    footerText: 'Created by Alex ©2023. All rights reserved.',
    puzzleTitle: 'Amazing Easy Sudoku',
    puzzleAuthor: 'Auto Generator Inc.',
    puzzleRules: 'Normal sudoku rules apply.',
    puzzleStartingPositionButton: document.querySelector('.puzzle-starting-position-button'),
    puzzleSetSolutionButton: document.querySelector('.puzzle-set-solution-button'),
    puzzleEditTitleButton: document.querySelector('.puzzle-edit-title-button'),
    puzzleStartingPosition: true,
    puzzleSetSolution: false,
};
