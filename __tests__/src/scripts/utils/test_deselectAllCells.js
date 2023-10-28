import { deselectAllCells } from '/src/scripts/utils/deselectAllCells.js';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: []
    }
}));


describe('deselectAllCells function', () => {
    beforeAll(() => {
        document.body.innerHTML = `
            <div class="cell clicked highlighted-row"></div>
            <div class="cell clicked highlighted-col"></div>
            <div class="cell"></div>
        `;

        require('/src/scripts/config.js').vars.cells = document.querySelectorAll('.cell');
        
        deselectAllCells();
    });

    it('should remove "clicked" class from all cells', () => {
        const clickedCells = document.querySelectorAll('.clicked');
        expect(clickedCells.length).toBe(0);
    });

});