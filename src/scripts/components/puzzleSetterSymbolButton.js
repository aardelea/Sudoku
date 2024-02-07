import { vars } from '../config.js';


export function puzzleSetterXVButton() {
    if(vars.puzzleSetterXVButton){
        vars.puzzleSetterXVButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterXButton.click();
        });
    };
};


export function puzzleSetterXButton() {
    if(vars.puzzleSetterXButton){
        vars.puzzleSetterXButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterXVButton.click();
            vars.puzzleSetterCurrentSymbol = "X";
        });
    };
};

export function puzzleSetterVButton() {
    if(vars.puzzleSetterVButton){
        vars.puzzleSetterVButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterXVButton.click();
            vars.puzzleSetterCurrentSymbol = "V";
        });
    };
};

export function puzzleSetterKropkiButton() {
    if(vars.puzzleSetterKropkiButton){
        vars.puzzleSetterKropkiButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterWhiteKropkiButton.click();
        });
    };
};

export function puzzleSetterWhiteKropkiButton() {
    if(vars.puzzleSetterWhiteKropkiButton){
        vars.puzzleSetterWhiteKropkiButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterKropkiButton.click();
            vars.puzzleSetterCurrentSymbol = "○";
        });
    };
};

export function puzzleSetterBlackKropkiButton() {
    if(vars.puzzleSetterBlackKropkiButton){
        vars.puzzleSetterBlackKropkiButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterKropkiButton.click();
            vars.puzzleSetterCurrentSymbol = "●";
        });
    };
};

export function puzzleSetterInequalityButton() {
    if(vars.puzzleSetterInequalityButton){
        vars.puzzleSetterInequalityButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterInequalityHigherButton.click();
        });
    };
};

export function puzzleSetterInequalityHigherButton() {
    if(vars.puzzleSetterInequalityHigherButton){
        vars.puzzleSetterInequalityHigherButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterInequalityButton.click();
            vars.puzzleSetterCurrentSymbol = ">";
        });
    };
};

export function puzzleSetterInequalityLowerButton() {
    if(vars.puzzleSetterInequalityLowerButton){
        vars.puzzleSetterInequalityLowerButton.addEventListener('click', function() {
            vars.puzzleSetterPositionButton.click();
            vars.puzzleSetterInequalityButton.click();
            vars.puzzleSetterCurrentSymbol = "<";
        });
    };
};
