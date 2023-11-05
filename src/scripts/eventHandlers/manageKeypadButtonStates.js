import { vars } from '/src/scripts/config.js';


export function manageButtonStates() {
    toggleButtonState(vars.digitsNormalButton, 'menu-button-pressed');

    vars.digitsNormalButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button-pressed');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCentreButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCornerButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button-pressed');
        toggleButtonState(vars.digitsCentreButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsCentreButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCentreButton, 'menu-button-pressed');
        toggleButtonState(vars.digitsColourButton, 'menu-button');
    });

    vars.digitsColourButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'menu-button');
        toggleButtonState(vars.digitsCornerButton, 'menu-button');
        toggleButtonState(vars.digitsCentreButton, 'menu-button');
        toggleButtonState(vars.digitsColourButton, 'menu-button-pressed');
    });
};


export function toggleButtonState(button, newClass) {
    button.classList.remove('menu-button', 'menu-button-pressed');
    button.classList.add(newClass);
};
