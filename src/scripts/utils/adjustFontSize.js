export function adjustFontSize(cell, numOfDigits) {
    if (!cell.classList.contains('center-text')) return;

    const originalSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--corner-text-size').trim());
    
    let newSize;
    switch (numOfDigits) {
        case 1:
        case 2:
            newSize = originalSize * 0.90;
            break;
        case 3:
        case 4:
            newSize = originalSize * 0.80;
            break;
        case 5:
        case 6:
            newSize = originalSize * 0.70;
            break;
        case 7:
        case 8:
        case 9:
            newSize = originalSize * 0.50;
            break;
    };

    cell.style.fontSize = `${newSize}rem`;
};