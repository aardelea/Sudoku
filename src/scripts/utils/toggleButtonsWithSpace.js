import { vars } from '/scripts/config.js';


export function toggleButtonsWithSpace() {
    if (vars.digitsNormalButton.classList.contains('button-pressed')) {
        vars.digitsCornerButton.click();
    } else if (vars.digitsCornerButton.classList.contains('button-pressed')) {
        vars.digitsCenterButton.click();
    } else if (vars.digitsCenterButton.classList.contains('button-pressed')) {
        vars.digitsColourButton.click();
    } else {
        vars.digitsNormalButton.click();
    };
};