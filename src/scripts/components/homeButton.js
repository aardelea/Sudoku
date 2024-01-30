import { vars } from '/scripts/config.js';


export function homeButton() {
    vars.homeButton.addEventListener('click', function() {
        window.location.href = '/index.html';
    });
};
