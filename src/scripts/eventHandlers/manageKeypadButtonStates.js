import { vars } from '/src/scripts/config.js';


export function manageKeypadButtonStates() {
    toggleButtonState(vars.digitsNormalButton, 'button-pressed');

    vars.digitsNormalButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'button-pressed');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCornerButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'button-pressed');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCenterButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'button-pressed');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsColourButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'button-pressed');
    });
};


export function toggleButtonState(button, newClass) {
    button.classList.remove('button-pressed');
    button.classList.add(newClass);
};
