import { vars } from '/src/scripts/config.js';
import { updateCellFromKeypad } from '/src/scripts/utils/updateCellFromKeypad.js';


export function keyPad() {
    vars.keypadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const digit = event.target.textContent;
            if (/[0-9]/.test(digit)) {
                updateCellFromKeypad(digit);
            };
        });
    });
};
