import { vars } from '/src/scripts/config.js';
import { updateUserDigitColour } from '/src/scripts/utils/updateUserDigitColour.js';


export function puzzleEditTitleButton() {
    var modal = document.getElementById("editModal");

    vars.puzzleEditTitleButton.addEventListener('click', function() {
        modal.style.display = "block";
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
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
        
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    };
};


