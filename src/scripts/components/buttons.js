export let activeMode = "Solver";

export function setupButtons() {
    const setterButton = document.getElementById('setter-button');
    const solverButton = document.getElementById('solver-button');

    solverButton.classList.add('active');
 
    // clicking on setter resets grid to "original" position
    setterButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        activeMode = "Solver";
        cells.forEach(cell => {
            if (!cell.classList.contains('fixed')) {
                cell.textContent = '';
            }
        });
        setterButton.classList.add('active');
        solverButton.classList.remove('active');
    });

    // clicking on solver allows you to enter digits
    solverButton.addEventListener('click', () => {
        activeMode = "Solver";
        solverButton.classList.add('active');
        setterButton.classList.remove('active');
    });
}
