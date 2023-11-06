import { vars } from '/src/scripts/config.js';


export function toggleButtonsWithSpace() {
    if (vars.digitsNormalButton.classList.contains('menu-button-pressed')) {
        vars.digitsCornerButton.click();
    } else if (vars.digitsCornerButton.classList.contains('menu-button-pressed')) {
        vars.digitsCenterButton.click();
    } else if (vars.digitsCenterButton.classList.contains('menu-button-pressed')) {
        vars.digitsColourButton.click();
    } else {
        vars.digitsNormalButton.click();
    };
};