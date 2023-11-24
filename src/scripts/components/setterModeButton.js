import { vars } from '/scripts/config.js';


export function setterModeButton() {
    vars.setterModeButton.addEventListener('click', function() {
        window.location.href = '/setter-mode.html';
    });
};
