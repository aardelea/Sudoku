import { vars } from '/src/scripts/config.js';


export function manageButtonStates() {
    toggleButtonState(vars.digitsNormalButton, 'other-button-pressed');

    vars.digitsNormalButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'other-button-pressed');
        toggleButtonState(vars.digitsCornerButton, 'other-button');
        toggleButtonState(vars.digitsCentreButton, 'other-button');
        toggleButtonState(vars.digitsColourButton, 'other-button');
    });

    vars.digitsCornerButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'other-button');
        toggleButtonState(vars.digitsCornerButton, 'other-button-pressed');
        toggleButtonState(vars.digitsCentreButton, 'other-button');
        toggleButtonState(vars.digitsColourButton, 'other-button');
    });

    vars.digitsCentreButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'other-button');
        toggleButtonState(vars.digitsCornerButton, 'other-button');
        toggleButtonState(vars.digitsCentreButton, 'other-button-pressed');
        toggleButtonState(vars.digitsColourButton, 'other-button');
    });

    vars.digitsColourButton.addEventListener('click', function() {
        toggleButtonState(vars.digitsNormalButton, 'other-button');
        toggleButtonState(vars.digitsCornerButton, 'other-button');
        toggleButtonState(vars.digitsCentreButton, 'other-button');
        toggleButtonState(vars.digitsColourButton, 'other-button-pressed');
    });
};


export function toggleButtonState(button, newClass) {
    button.classList.remove('other-button', 'other-button-pressed');
    button.classList.add(newClass);
};
