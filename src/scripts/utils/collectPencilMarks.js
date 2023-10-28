export function collectPencilMarks(cell, digit) {
    const pencilMarks = [];
    Array.from(cell.childNodes).forEach(child => {
        if (child.nodeType !== 3 && (child.classList.contains('center-text') || child.classList.contains('corner-text')) && child.textContent === String(digit)) {
            pencilMarks.push(child);
        };
    });
    return pencilMarks;
};