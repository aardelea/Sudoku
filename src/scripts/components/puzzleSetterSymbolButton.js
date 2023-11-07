import { vars } from '/src/scripts/config.js';


export function puzzleSetterXVButton() {
    vars.puzzleSetterXVButton.addEventListener('click', function() {
        vars.puzzleStartingPositionButton.click();
        vars.puzzleSetterXButton.click();
    });
};


export function puzzleSetterXButton() {
    vars.puzzleSetterXButton.addEventListener('click', function() {
        vars.puzzleStartingPositionButton.click();
        vars.puzzleSetterXVButton.click();
        vars.puzzleSetterCurrentSymbol = "X";
    });
};

export function puzzleSetterVButton() {
    vars.puzzleSetterVButton.addEventListener('click', function() {
        vars.puzzleStartingPositionButton.click();
        vars.puzzleSetterXVButton.click();
        vars.puzzleSetterCurrentSymbol = "V";
    });
};

export function puzzleSetterKropkiButton() {
    vars.puzzleSetterKropkiButton.addEventListener('click', function() {
        vars.puzzleStartingPositionButton.click();
        vars.puzzleSetterWhiteKropkiButton.click();
    });
};

export function puzzleSetterWhiteKropkiButton() {
    vars.puzzleSetterWhiteKropkiButton.addEventListener('click', function() {
        vars.puzzleStartingPositionButton.click();
        vars.puzzleSetterKropkiButton.click();
        vars.puzzleSetterCurrentSymbol = "○";
    });
};

export function puzzleSetterBlackKropkiButton() {
    vars.puzzleSetterBlackKropkiButton.addEventListener('click', function() {
        vars.puzzleStartingPositionButton.click();
        vars.puzzleSetterKropkiButton.click();
        vars.puzzleSetterCurrentSymbol = "●";
    });
};
