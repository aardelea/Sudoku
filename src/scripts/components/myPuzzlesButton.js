import { vars } from '/src/scripts/config.js';


export function myPuzzlesButton() {
    vars.myPuzzlesButton.addEventListener('click', function() {
        window.location.href = '/src/my-puzzles.html';
    });
};
