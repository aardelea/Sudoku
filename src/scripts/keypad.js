import { vars } from '/scripts/config.js';
import { keyPad } from '/scripts/components/keyPad.js';
import { resetButton } from '/scripts/components/resetButton.js';
import { deleteButton } from '/scripts/components/deleteButton.js';
import { undoButton } from '/scripts/components/undoButton.js';
import { redoButton } from '/scripts/components/redoButton.js';
import { toggleButtonStateInGroup } from '/scripts/utils/toggleButtonStateInGroup.js';
import { digitsCenterButton } from '/scripts/components/digitsCenterButton.js';
import { digitsNormalButton } from '/scripts/components/digitsNormalButton.js';
import { digitsCornerButton } from '/scripts/components/digitsCornerButton.js';
import { digitsColourButton } from '/scripts/components/digitsColourButton.js';


document.addEventListener('DOMContentLoaded', () => {
    keyPad();
    resetButton();
    deleteButton();
    undoButton();
    redoButton();

    digitsNormalButton();
    digitsCenterButton();
    digitsCornerButton();
    digitsColourButton();

    vars.keypadButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.keypadButtonsGroup);
        });
    });

    window.onload = function() {
        document.querySelector('.footer').textContent = vars.footerText;
        document.querySelector('.sudoku-title').textContent = vars.puzzleTitle;
        document.querySelector('.sudoku-author').textContent = "by " + vars.puzzleAuthor;
        document.querySelector('.puzzle-rules').textContent = vars.puzzleRules;
    };
});
