export function adjustColorDivSizes(cell) {
    const colorDivs = cell.querySelectorAll('.colour-text');
    const numberOfColors = colorDivs.length;
    const widthPercentage = 100 / numberOfColors;

    colorDivs.forEach((div, index) => {
        div.style.width = `${widthPercentage}%`;
        div.style.left = `${widthPercentage * index}%`;
    });
};