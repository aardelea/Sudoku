import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { createSudokuTable } from '../../graphql/mutations.js';
import config from '../../amplifyconfiguration.json';

import { vars } from '../config.js';


export function puzzleSaveButton() {

    if(vars.puzzleSaveButton){
        vars.puzzleSaveButton.onclick = async function() {
            const uid = generateUID();
    
            const puzzleData = {
                uid: uid,
                sudoku_json: "{}", 
                sudoku_title: document.getElementById("puzzleTitle").value,
                sudoku_rules: document.getElementById("puzzleRules").value,
                author: document.getElementById("puzzleAuthor").value,
                created_date: new Date().toISOString(), 
                times_solver: 0,
                solvers: [], 
            };
    
            console.log("puzzleData = ",puzzleData);
    
            try {
                Amplify.configure(config);
                const client = generateClient();
                const result = await client.graphql({
                    query: createSudokuTable,
                    variables: {
                        input: puzzleData
                    }
                });
                console.log('Puzzle saved successfully');
            } catch (error) {
                console.error('Error saving puzzle:', error);
            };
            
        };
    };

};


function generateUID() {
    return 'uid_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
};
