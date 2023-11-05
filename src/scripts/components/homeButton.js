import { vars } from '/src/scripts/config.js';


export function homeButton() {
    vars.homeButton.addEventListener('click', function() {
        window.location.href = '/src/home.html';
    });
};
