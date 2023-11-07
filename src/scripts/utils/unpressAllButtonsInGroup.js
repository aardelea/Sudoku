export function unpressAllButtonsInGroup(buttonGroup) {
    buttonGroup.forEach(button => {
        button.classList.remove('button-pressed');
    });
};