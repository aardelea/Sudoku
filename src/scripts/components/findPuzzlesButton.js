import { vars } from '/scripts/config.js';


export function findPuzzlesButton() {
    vars.findPuzzlesButton.addEventListener('click', function() {
        window.location.href = '/find-puzzles.html';
    });
};
