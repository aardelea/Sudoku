import { vars } from '/scripts/config.js';
import { updateCell } from '/scripts/utils/updateCell.js';


export function keyPad() {
    vars.keypadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            vars.buttonClicked = true;
            const digit = event.target.textContent;
            if (/[0-9]/.test(digit)) {
                updateCell(digit);
            };
        });
    });
};
