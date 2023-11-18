import { vars } from '/src/scripts/config.js';


export function puzzleSetterXVButton() {
    vars.puzzleSetterXVButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterXButton.click();
    });
};


export function puzzleSetterXButton() {
    vars.puzzleSetterXButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterXVButton.click();
        vars.puzzleSetterCurrentSymbol = "X";
    });
};

export function puzzleSetterVButton() {
    vars.puzzleSetterVButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterXVButton.click();
        vars.puzzleSetterCurrentSymbol = "V";
    });
};

export function puzzleSetterKropkiButton() {
    vars.puzzleSetterKropkiButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterWhiteKropkiButton.click();
    });
};

export function puzzleSetterWhiteKropkiButton() {
    vars.puzzleSetterWhiteKropkiButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterKropkiButton.click();
        vars.puzzleSetterCurrentSymbol = "○";
    });
};

export function puzzleSetterBlackKropkiButton() {
    vars.puzzleSetterBlackKropkiButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterKropkiButton.click();
        vars.puzzleSetterCurrentSymbol = "●";
    });
};

export function puzzleSetterInequalityButton() {
    vars.puzzleSetterInequalityButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterInequalityHigherButton.click();
    });
};

export function puzzleSetterInequalityHigherButton() {
    vars.puzzleSetterInequalityHigherButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterInequalityButton.click();
        vars.puzzleSetterCurrentSymbol = ">";
    });
};

export function puzzleSetterInequalityLowerButton() {
    vars.puzzleSetterInequalityLowerButton.addEventListener('click', function() {
        vars.puzzleSetterPositionButton.click();
        vars.puzzleSetterInequalityButton.click();
        vars.puzzleSetterCurrentSymbol = "<";
    });
};
