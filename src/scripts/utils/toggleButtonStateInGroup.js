export function toggleButtonStateInGroup(buttonToActivate, buttonGroup) {
    buttonGroup.forEach(button => {
        if (button === buttonToActivate) {
            button.classList.add('button-pressed');
        } else {
            button.classList.remove('button-pressed');
            button.classList.add('menu-button');
        };
    });
};  