import { vars } from '/scripts/config.js';


export function myPuzzlesButton() {
    vars.myPuzzlesButton.addEventListener('click', function() {
        window.location.href = '/my-puzzles.html';
    });
};
