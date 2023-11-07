import { vars } from '/src/scripts/config.js';
import { toggleButtonStateInGroup } from '/src/scripts/utils/toggleButtonStateInGroup.js';
import { puzzleStartingPositionButton } from '/src/scripts/components/puzzleStartingPositionButton.js';
import { puzzleSetterDigitsButton } from '/src/scripts/components/puzzleSetterDigitsButton.js';
import { puzzleSetterXVButton, puzzleSetterXButton, puzzleSetterVButton, puzzleSetterKropkiButton, puzzleSetterWhiteKropkiButton, puzzleSetterBlackKropkiButton } from '/src/scripts/components/puzzleSetterSymbolButton.js';
import { manageAddingSymbolToBorder } from '/src/scripts/eventHandlers/manageAddingSymbolToBorder.js';
import { puzzleSetSolutionButton } from '/src/scripts/components/puzzleSetSolutionButton.js';
import { puzzleEditTitleButton } from '/src/scripts/components/puzzleEditTitleButton.js';


document.addEventListener('DOMContentLoaded', () => {
    puzzleStartingPositionButton();
    vars.puzzleStartingPositionButton.click();
    puzzleSetterDigitsButton();
    puzzleSetterXVButton();
    puzzleSetterXButton();
    puzzleSetterVButton();
    puzzleSetterKropkiButton();
    puzzleSetterWhiteKropkiButton();
    puzzleSetterBlackKropkiButton();

    puzzleSetSolutionButton();
    puzzleEditTitleButton();

    vars.setterButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterButtonsGroup);
        });
    });

    vars.setterDigitsButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterDigitsButtonsGroup);
        });
    });

    vars.setterXVButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterXVButtonsGroup);
        });
    });

    vars.setterKropkiButtonsGroup.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonStateInGroup(button, vars.setterKropkiButtonsGroup);
        });
    });
});

manageAddingSymbolToBorder();