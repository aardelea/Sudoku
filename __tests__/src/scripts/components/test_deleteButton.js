import { deleteButton } from '/src/scripts/components/deleteButton.js';
import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


jest.mock('/src/scripts/config.js', () => ({
	vars: {
		cells: []
	}
}));
jest.mock('/src/scripts/utils/highlightConflicts.js');


describe('deleteButton function', () => {
	let deleteBtn;

	beforeEach(() => {
		document.body.innerHTML = `
			<div class="keypad-delete"></div>
			<div class="cell clicked user-digit">1</div>
			<div class="cell clicked">2</div>
			<div class="cell user-digit">3</div>
		`;
		deleteBtn = document.querySelector('.keypad-delete');

		require('/src/scripts/config.js').vars.cells = document.querySelectorAll('.cell');

		highlightConflicts.mockClear();
		deleteButton();
	});

	it('clicking delete whilst having a cell selected removes user-added value', () => {
		const cell = document.querySelector('.clicked.user-digit');
		deleteBtn.click();
		expect(cell.textContent).toBe('');
	});

	it('clicking delete but not having any cell selected does not do anything', () => {
		const cell = document.querySelector('.user-digit:not(.clicked)');
		deleteBtn.click();
		expect(cell.textContent).toBe('3');
	});

	it('clicking delete whilst having a fixed cell selected does not to anything', () => {
		const cell = document.querySelector('.clicked:not(.user-digit)');
		deleteBtn.click();
		expect(cell.textContent).toBe('2');
	});

	it('clicking delete whilst having a cell selected with user-added digits removes its user-digit class', () => {
		const cell = document.querySelector('.clicked.user-digit');
		deleteBtn.click();
		expect(cell.classList.contains('user-digit')).toBe(false);
	});

	it('clicking delete correctly calls the highlightConflicts function', () => {
		deleteBtn.click();
		expect(highlightConflicts).toHaveBeenCalledTimes(1);
	});
});
