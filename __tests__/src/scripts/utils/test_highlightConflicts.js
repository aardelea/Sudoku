import { highlightConflicts } from '/src/scripts/utils/highlightConflicts.js';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: []
    }
}));


describe('highlightConflicts function', () => {
    beforeAll(() => {
        let html = '';
        for (let i = 0; i < 81; i++) {
            html += `<div class="cell"></div>`;
        }
        document.body.innerHTML = html;

        const cells = document.querySelectorAll('.cell');

        cells[0].textContent = '1';
        cells[1].textContent = '1';
        cells[9].textContent = '1';
        
        cells[4].textContent = '3';
        cells[5].textContent = '3';
        cells[6].textContent = '3';
        
        cells[18].textContent = '4';
        
        require('/src/scripts/config.js').vars.cells = cells;
        highlightConflicts();
    });

    it('should add "conflict-highlighted" class to conflicting cells', () => {
        const conflictHighlightedCells = document.querySelectorAll('.conflict-highlighted');
        expect(conflictHighlightedCells.length).toBe(6);
    });

    it('should correctly highlight cells with the same value', () => {
        const cellsWithOne = [0, 1, 9];
        const cellsWithThree = [4, 5, 6];

        cellsWithOne.forEach(i => {
            const cell = document.querySelectorAll('.cell')[i];
            expect(cell.classList.contains('conflict-highlighted')).toBe(true);
        });
        
        cellsWithThree.forEach(i => {
            const cell = document.querySelectorAll('.cell')[i];
            expect(cell.classList.contains('conflict-highlighted')).toBe(true);
        });
    });

    it('should not highlight cells without conflict', () => {
        const nonConflictingCell = document.querySelectorAll('.cell')[18];
        expect(nonConflictingCell.classList.contains('conflict-highlighted')).toBe(false);
    });
});