import { vars } from '/scripts/config.js';


export function digitsNormalButton() {
    vars.digitsNormalButton.addEventListener('click', function() {
        vars.isCornerText = false;
        vars.isCenterText = false;
        vars.isColourText = false;
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.remove('corner-text');
                button.classList.remove('center-text');
                button.classList.remove('colour-text');
            };
        });
    });
};
