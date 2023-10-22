import { resetButton } from '/src/scripts/components/resetButton.js';


jest.mock('/src/scripts/config.js', () => ({
	vars: {
		cells: []
	}
}));


describe('resetButton function', () => {

    beforeAll(() => {
        document.body.innerHTML = `
            <button id="reset-button"></button>
            <div class="cell conflict-highlighted fixed">5</div>
            <div class="cell conflict-highlighted">1</div>
            <div class="cell">3</div>
        `;

        require('/src/scripts/config.js').vars.resetButton = document.getElementById('reset-button');
        require('/src/scripts/config.js').vars.cells = document.querySelectorAll('.cell');
        
        resetButton();
    });

    it('pressing reset removes any cell highlighting', () => {
        const resetBtn = document.getElementById('reset-button');
        resetBtn.click();

        require('/src/scripts/config.js').vars.cells.forEach(cell => {
            expect(cell.classList.contains('conflict-highlighted')).toBe(false);
        });
    });

    it('pressing reset clears any non-fixed cells', () => {
        const nonFixedCell = document.querySelector('.cell:not(.fixed)');
        expect(nonFixedCell.textContent).toBe('');
    });

    it('pressing reset does not impact fixed cells', () => {
        const fixedCell = document.querySelector('.cell.fixed');
        expect(fixedCell.textContent).toBe('5');
    });

});
