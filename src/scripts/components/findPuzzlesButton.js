import { vars } from '/src/scripts/config.js';


export function findPuzzlesButton() {
    vars.findPuzzlesButton.addEventListener('click', function() {
        window.location.href = '/src/find-puzzles.html';
    });
};
