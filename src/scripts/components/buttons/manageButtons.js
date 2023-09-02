import { setupSolverButton } from './setupSolverButton.js';
import { setupSetterButton } from './setupSetterButton.js';


export const solverState = {
    activeMode: "Solver"
};

export function manageButtons() {
    setupSetterButton()
    setupSolverButton()
}
