import { solverState } from '/src/scripts/components/buttons/manageButtons.js';
import { solverButton } from '/src/scripts/components/buttons/setupSolverButton.js';


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
