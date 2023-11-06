export function adjustFontSize(cell, numOfDigits) {
    const centerTextElements = cell.querySelectorAll('.center-text');
    if (!centerTextElements.length) return;

    const originalSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--center-text-size').trim());
    
    let newSize;
    switch (numOfDigits) {
        case 1:
        case 2:
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

    centerTextElements.forEach(element => {
        element.style.fontSize = `${newSize}rem`;
    });
};