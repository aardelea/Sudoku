import { vars } from '/src/scripts/config.js';


export function manageKeypadButtonStates() {
    toggleButtonState(vars.digitsNormalButton, 'menu-button-pressed');

    vars.digitsNormalButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button-pressed');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCornerButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button-pressed');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCenterButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button-pressed');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsColourButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCenterButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button-pressed');
    });
};


export function toggleButtonState(button, newClass) {
    button.classList.remove('menu-button', 'menu-button-pressed');
    button.classList.add(newClass);
};
