import { vars } from '/scripts/config.js';


export function digitsCornerButton() {
    vars.digitsCornerButton.addEventListener('click', function() {
        vars.isCornerText = true;
        vars.isCenterText = false;
        vars.isColourText = false;
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.add('corner-text');
                button.classList.remove('center-text');
                button.classList.remove('colour-text');
            };
        });
    });
};