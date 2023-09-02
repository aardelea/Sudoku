import { solverState } from './manageButtons.js';
import { setterButton } from './setupSetterButton.js';


export let solverButton = document.getElementById('solver-button');

export function setupSolverButton() {
    solverButton.classList.add('active');
    solverButton.addEventListener('click', () => {
        solverState.activeMode = "Solver";
        solverButton.classList.add('active');
        setterButton.classList.remove('active');
    });
}
