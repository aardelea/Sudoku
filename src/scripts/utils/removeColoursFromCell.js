export function removeColoursFromCell(cell) {
    cell.classList.remove('colour-text');
    for (let digit = 0; digit <= 10; digit++) {
        cell.classList.remove(`colour-${digit}`);
    };
};