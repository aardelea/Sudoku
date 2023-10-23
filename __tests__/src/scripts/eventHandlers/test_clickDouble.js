import * as clickDoubleModule from '/src/scripts/eventHandlers/clickDouble';
import { vars } from '/src/scripts/config.js';


jest.mock('/src/scripts/config.js', () => ({
    vars: {
        cells: []
    }
}));


describe('clickDouble', () => {
    let cell1, cell2, cell3;

    beforeEach(() => {
        cell1 = document.createElement('div');
        cell2 = document.createElement('div');
        cell3 = document.createElement('div');

        cell1.textContent = '1';
        cell2.textContent = '1';
        cell3.textContent = '2';

        vars.cells = [cell1, cell2, cell3];

        clickDoubleModule.clickDouble();
    });

    test('should add clicked class to cells with matching content on double click', () => {
        const event = new Event('dblclick');

        cell1.dispatchEvent(event);
        expect(cell2.classList.contains('clicked')).toBe(true);
        expect(cell3.classList.contains('clicked')).toBe(false);
    });

    test('should not add clicked class if content is empty', () => {
        cell1.textContent = '';
        const event = new Event('dblclick');

        cell1.dispatchEvent(event);
        expect(cell2.classList.contains('clicked')).toBe(false);
    });
});