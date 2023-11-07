export function checkIfInnerBorder(clickedCell, event) {
    const row = parseInt(clickedCell.dataset.row, 10);
    const col = parseInt(clickedCell.dataset.col, 10);

    const rect = clickedCell.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top;

    const borderWidth = 8;

    const clickedTopBorder = y < borderWidth && row > 1;
    const clickedBottomBorder = y > (rect.height - borderWidth) && row < 9;
    const clickedLeftBorder = x < borderWidth && col > 1;
    const clickedRightBorder = x > (rect.width - borderWidth) && col < 9;

    const isInnerBorder = clickedTopBorder || clickedBottomBorder || clickedLeftBorder || clickedRightBorder;

    let direction;
    if (clickedTopBorder) direction = 'top';
    else if (clickedBottomBorder) direction = 'bottom';
    else if (clickedLeftBorder) direction = 'left';
    else if (clickedRightBorder) direction = 'right';

    return { isInnerBorder, direction };
};
