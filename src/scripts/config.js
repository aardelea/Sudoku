export const vars = {
    isMouseDown: false,
    sudokuGrid: document.querySelector('.sudoku-grid'),
    cells: document.querySelector('.sudoku-grid').querySelectorAll('.cell'),
    resetButton: document.querySelector('.reset-button'),
    undoButton: document.querySelector('.undo-button'),
    redoButton: document.querySelector('.redo-button'),
    keypadButtons: document.querySelectorAll('.keypad-button'),
    digitsCenterButton: document.querySelector('.center-button'),
    digitsNormalButton: document.querySelector('.digits-normal-button'),
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
    puzzleEditTitleButton: document.querySelector('.puzzle-edit-title-button'),
    puzzleSetterDigitsButton: document.querySelector('.puzzle-setter-digits-button'),
    puzzleSetterXVButton: document.querySelector('.puzzle-setter-x-v-button'),
    puzzleSetterXButton: document.querySelector('.puzzle-setter-x-button'),
    puzzleSetterVButton: document.querySelector('.puzzle-setter-v-button'),
    puzzleSetterKropkiButton: document.querySelector('.puzzle-setter-kropki-button'),
    puzzleSetterWhiteKropkiButton: document.querySelector('.puzzle-setter-white-kropki-button'),
    puzzleSetterBlackKropkiButton: document.querySelector('.puzzle-setter-black-kropki-button'),
    puzzleSetterCurrentSymbol: null,
    puzzleStartingPosition: false,
    initializeButtonGroups: function() {
        this.setterButtonsGroup = [this.puzzleStartingPositionButton, this.puzzleEditTitleButton];
        this.keypadButtonsGroup = [this.digitsNormalButton, this.digitsCornerButton, this.digitsCenterButton, this.digitsColourButton];
        this.setterDigitsButtonsGroup = [this.puzzleSetterDigitsButton, this.puzzleSetterXVButton, this.puzzleSetterKropkiButton];
        this.setterXVButtonsGroup = [this.puzzleSetterXButton, this.puzzleSetterVButton];
        this.setterKropkiButtonsGroup = [this.puzzleSetterWhiteKropkiButton, this.puzzleSetterBlackKropkiButton];
    },
    modal: document.getElementById("editModal"),
};

vars.initializeButtonGroups();