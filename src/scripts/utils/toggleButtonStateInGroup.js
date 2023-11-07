export function toggleButtonStateInGroup(buttonToActivate, buttonGroup) {
    buttonGroup.forEach(button => {
        if (button === buttonToActivate) {
            button.classList.add('menu-button-pressed');
        } else {
            button.classList.remove('menu-button-pressed');
            button.classList.add('menu-button');
        };
    });
};