import { solverState } from './manageButtons.js';
import { solverButton } from './setupSolverButton.js';


export let setterButton = document.getElementById('setter-button');

export function setupSetterButton() {
    setterButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        solverState.activeMode = "Setter";
        cells.forEach(cell => {
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
            }
        });
        setterButton.classList.add('active');
        solverButton.classList.remove('active');
    });
}
