import { vars } from '/src/scripts/config.js';


export function toggleButtonsWithSpace() {
    if (vars.digitsNormalButton.classList.contains('other-button-pressed')) {
        vars.digitsCornerButton.click();
    } else if (vars.digitsCornerButton.classList.contains('other-button-pressed')) {
        vars.digitsCentreButton.click();
    } else {
        vars.digitsNormalButton.click();
    };
};