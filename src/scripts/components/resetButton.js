import { vars } from '/src/scripts/config.js';


export function resetButton() {
    vars.resetButton.addEventListener('click', () => {
        vars.cells.forEach(cell => {
            cell.classList.remove('conflict-highlighted');
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
            };
        });
    });
};
