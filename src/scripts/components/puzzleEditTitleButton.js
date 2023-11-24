import { vars } from '/scripts/config.js';


export function puzzleEditTitleButton() {

    vars.puzzleEditTitleButton.addEventListener('click', function() {
        vars.modal.style.display = "block";
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        exitModalEditMode();
    };

    var saveBtn = document.getElementById("saveBtn");

    saveBtn.onclick = function() {
        var title = document.getElementById("puzzleTitle").value;
        var author = document.getElementById("puzzleAuthor").value;
        var rules = document.getElementById("puzzleRules").value;

        vars.puzzleTitle = title;
        vars.puzzleAuthor = author;
        vars.puzzleRules = rules;
        document.querySelector('.sudoku-title').textContent = title;
        document.querySelector('.sudoku-author').textContent = "by " + author;
        document.querySelector('.puzzle-rules').textContent = rules;
        
        exitModalEditMode();
    };

    window.onclick = function(event) {
        if (event.target == vars.modal) {
            exitModalEditMode();
        };
    };
};


export function exitModalEditMode(){
    vars.modal.style.display = "none";
    vars.puzzleSetterPositionButton.click();
}
