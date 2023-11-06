import { vars } from '/src/scripts/config.js';


export function manageKeypadButtonStates() {
    toggleButtonState(vars.digitsNormalButton, 'keypad-button-pressed');

    vars.digitsNormalButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'keypad-button-pressed');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCornerButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'keypad-button-pressed');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCenterButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'keypad-button-pressed');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsColourButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'keypad-button-pressed');
    });
};


export function toggleButtonState(button, newClass) {
    button.classList.remove('menu-button', 'keypad-button-pressed');
    button.classList.add(newClass);
};
