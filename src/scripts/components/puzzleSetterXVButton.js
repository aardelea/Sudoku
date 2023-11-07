import { vars } from '/src/scripts/config.js';


export function puzzleSetterXVButton() {
    vars.puzzleSetterXVButton.addEventListener('click', function() {
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
