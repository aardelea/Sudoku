import { vars } from '/src/scripts/config.js';


export function manageSetterButtonStates() {
    vars.puzzleStartingPositionButton.addEventListener('click', function() {
        toggleButtonState(vars.puzzleStartingPositionButton, 'menu-button-pressed');
        toggleButtonState(vars.puzzleSetSolutionButton, 'menu-button');
    });

    vars.puzzleSetSolutionButton.addEventListener('click', function() {
        toggleButtonState(vars.puzzleStartingPositionButton, 'menu-button');
        toggleButtonState(vars.puzzleSetSolutionButton, 'menu-button-pressed');
    });
};


export function toggleButtonState(button, newClass) {
    button.classList.remove('menu-button-pressed');
    button.classList.add(newClass);
};
