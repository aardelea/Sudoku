import { vars } from '/src/scripts/config.js';


export function setterModeButton() {
    vars.setterModeButton.addEventListener('click', function() {
        window.location.href = '/src/setter-mode.html';
    });
};
