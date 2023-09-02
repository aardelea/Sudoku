import { setupSolverButton } from '/src/scripts/components/buttons/setupSolverButton.js';
import { setupSetterButton } from '/src/scripts/components/buttons/setupSetterButton.js';


export const solverState = {
    activeMode: "Solver"
};

export function manageButtons() {
    setupSetterButton()
    setupSolverButton()
}
