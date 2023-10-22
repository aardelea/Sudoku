import { mouseOver } from '/src/scripts/eventHandlers/mouseOver';
import { removeSharedEdges } from '/src/scripts/utils/removeSharedEdges';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: [],
        isMouseDown: false
    }
}));
jest.mock('/src/scripts/utils/removeSharedEdges.js');


describe('mouseOver', () => {
    let cell1, cell2;
    let vars = require('/src/scripts/config.js').vars;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="cell"></div>
            <div class="cell"></div>
        `;

        cell1 = document.querySelector('.cell:nth-child(1)');
        cell2 = document.querySelector('.cell:nth-child(2)');

        vars.cells = [cell1, cell2];
        removeSharedEdges.mockClear();
        mouseOver();
    });

    it('should add clicked class when mouseover and isMouseDown is true', () => {
        vars.isMouseDown = true;
        cell1.dispatchEvent(new Event('mouseover'));
        expect(cell1.classList.contains('clicked')).toBe(true);
    });

    it('should not add clicked class when mouseover and isMouseDown is false', () => {
        vars.isMouseDown = false;
        cell1.dispatchEvent(new Event('mouseover'));
        expect(cell1.classList.contains('clicked')).toBe(false);
    });

    it('should call removeSharedEdges when mouseover and isMouseDown is true', () => {
        vars.isMouseDown = true;
        cell1.dispatchEvent(new Event('mouseover'));
        expect(removeSharedEdges).toHaveBeenCalledTimes(1);
    });

    it('should not call removeSharedEdges when mouseover and isMouseDown is false', () => {
        vars.isMouseDown = false;
        cell1.dispatchEvent(new Event('mouseover'));
        expect(removeSharedEdges).toHaveBeenCalledTimes(0);
    });
});