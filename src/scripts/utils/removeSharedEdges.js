export function removeSharedEdges() {
    const allCells = Array.from(document.querySelectorAll('.cell'));
    allCells.forEach(cell => cell.classList.remove('right-shared', 'left-shared', 'top-shared', 'bottom-shared'));

    const selectedCells = Array.from(document.querySelectorAll('.cell.clicked'));
    const organizeCells = (attr) => {
        const group = {};
        selectedCells.forEach(cell => {
            const attrVal = cell.getAttribute(attr);
            if (!group[attrVal]) group[attrVal] = [];
            group[attrVal].push(cell);
        });
        return group;
    };

    const processGroup = (cellsInGroup, attr, nextAttr, class1, class2) => {
        cellsInGroup.sort((a, b) => {
            const valA = parseInt(a.getAttribute(nextAttr));
            const valB = parseInt(b.getAttribute(nextAttr));
            return valA - valB;
        });

        for (let i = 0; i < cellsInGroup.length - 1; i++) {
            const cell = cellsInGroup[i];
            const nextCell = cellsInGroup[i + 1];
            const valCurrent = parseInt(cell.getAttribute(nextAttr));
            const valNext = parseInt(nextCell.getAttribute(nextAttr));

            if (valNext - valCurrent === 1) {
                cell.classList.add(class1);
                nextCell.classList.add(class2);
            }
        }
    };

    const rows = organizeCells('data-row');
    Object.values(rows).forEach(cellsInRow => processGroup(cellsInRow, 'data-row', 'data-col', 'right-shared', 'left-shared'));

    const cols = organizeCells('data-col');
    Object.values(cols).forEach(cellsInCol => processGroup(cellsInCol, 'data-col', 'data-row', 'bottom-shared', 'top-shared'));
}