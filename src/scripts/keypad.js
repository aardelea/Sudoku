import { vars } from '/src/scripts/config.js';
import { keyPad } from '/src/scripts/components/keyPad.js';
import { resetButton } from '/src/scripts/components/resetButton.js';
import { deleteButton } from '/src/scripts/components/deleteButton.js';
import { undoButton } from '/src/scripts/components/undoButton.js';
import { redoButton } from '/src/scripts/components/redoButton.js';
import { toggleButtonStateInGroup } from '/src/scripts/utils/toggleButtonStateInGroup.js';
import { digitsCenterButton } from '/src/scripts/components/digitsCenterButton.js';
import { digitsNormalButton } from '/src/scripts/components/digitsNormalButton.js';
import { digitsCornerButton } from '/src/scripts/components/digitsCornerButton.js';
import { digitsColourButton } from '/src/scripts/components/digitsColourButton.js';


document.addEventListener('DOMContentLoaded', () => {
    keyPad();
    resetButton();
    deleteButton();
    undoButton();
    redoButton();

    const keypadButtonsGroup = [vars.digitsNormalButton, vars.digitsCornerButton, vars.digitsCenterButton, vars.digitsColourButton];
    keypadButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, keypadButtonsGroup);
        });
    });

    digitsNormalButton();
    digitsCenterButton();
    digitsCornerButton();
    digitsColourButton();

    window.onload = function() {
        document.querySelector('.footer').textContent = vars.footerText;
        document.querySelector('.sudoku-title').textContent = vars.puzzleTitle;
        document.querySelector('.sudoku-author').textContent = "by " + vars.puzzleAuthor;
        document.querySelector('.puzzle-rules').textContent = vars.puzzleRules;
    };
});
