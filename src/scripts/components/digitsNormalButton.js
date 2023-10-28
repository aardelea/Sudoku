import { vars } from '/src/scripts/config.js';


export function digitsNormalButton() {
    vars.digitsNormalButton.addEventListener('click', function() {
        vars.isCornerText = false;
        vars.isCentreText = false;
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.remove('corner-text');
                button.classList.remove('center-text');
            };
        });
    });
};
