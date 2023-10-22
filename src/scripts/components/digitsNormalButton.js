import { vars } from '/src/scripts/config.js';


export function digitsNormalButton() {
    vars.digitsNormalButton.addEventListener('click', function() {
        vars.keypadButtons.forEach(function(button) {
            if (button.textContent >= "0" && button.textContent <= "9") {
                button.classList.remove('small-text', 'center-text');
            };
        });
    });
};
