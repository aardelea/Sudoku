import { vars } from '/src/scripts/config.js';


export function digitsCentreButton() {
    vars.digitsCentreButton.addEventListener('click', function() {
        vars.isCornerText = false;
        vars.isCentreText = true;
        vars.isColourText = false;
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.remove('corner-text');
                button.classList.add('center-text');
                button.classList.remove('colour-text');
            };
        });
    });
};
