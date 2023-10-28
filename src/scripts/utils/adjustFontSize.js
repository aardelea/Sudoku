export function adjustFontSize(cell, numOfDigits) {
    if (!cell.classList.contains('center-text')) return;
    
    switch (numOfDigits) {
        case 1:
        case 2:
            cell.style.fontSize = '1.15em';
            break;
        case 3:
        case 4:
            cell.style.fontSize = '0.85em';
            break;
        case 5:
        case 6:
            cell.style.fontSize = '0.65em';
            break;
        case 7:
        case 8:
        case 9:
            cell.style.fontSize = '0.5em';
            break;
    };
};