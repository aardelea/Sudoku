import { vars } from '/src/scripts/config.js';


export function digitsCentreButton() {
    vars.digitsCentreButton.addEventListener('click', function() {
        vars.isCentreText = true;
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.add('small-text', 'center-text');
            };
        });
    });
};
