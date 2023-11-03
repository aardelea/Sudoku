import { vars } from '/src/scripts/config.js';


export function digitsColourButton() {
    vars.digitsColourButton.addEventListener('click', function() {
        vars.isCornerText = false;
        vars.isCentreText = false;
        vars.isColourText = true;
    });
};
