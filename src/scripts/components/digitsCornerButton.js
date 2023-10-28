import { vars } from '/src/scripts/config.js';


export function digitsCornerButton() {
    vars.digitsCornerButton.addEventListener('click', function() {
        vars.isCornerText = true;
        vars.isCentreText = false;
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.add('corner-text');
                button.classList.remove('center-text');
            };
        });
    });
};