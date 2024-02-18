Advanced Sudoku web-app with auth & puzzle saving features built using JS, NPM, AWS Amplify, DynamoDB, Cognito.

Screenshots:
![image](https://github.com/aardelea/Sudoku/assets/98484362/5e063b2e-3c3c-4521-8cc5-a626b3ca1502)
![image](https://github.com/aardelea/Sudoku/assets/98484362/3189681c-3554-4050-b2a5-89d4979235b6)
![image](https://github.com/aardelea/Sudoku/assets/98484362/69b20d71-491e-48a0-b214-cc10edbd9769)
![image](https://github.com/aardelea/Sudoku/assets/98484362/88afe976-8198-489a-960f-4dbeb95ddd1a)
![image](https://github.com/aardelea/Sudoku/assets/98484362/de7b05bf-f1f4-47be-8d66-05357052f6e8)
![image](https://github.com/aardelea/Sudoku/assets/98484362/e9067fa9-4fb9-4cd7-a1dd-9418f43da54b)
![image](https://github.com/aardelea/Sudoku/assets/98484362/37c1c007-3f1a-40b5-b59b-8f2aeebd6579)
![image](https://github.com/aardelea/Sudoku/assets/98484362/800d7fe6-c3a8-4593-ba78-889caaaea039)
![image](https://github.com/aardelea/Sudoku/assets/98484362/d7008da9-e2e4-461a-b1fd-b223e1aa4ef2)


Puzzle featues
- Border highlighting of selected cells.
- Multi-cell selection and removal of highlighted-shared cells.
- Double-clicking on digit selects all other digits of same value in the grid.
- Ability to enter normal digits and 2 types of pencilmarks (centre and corner)
- Pencilmarks change in size depending how many are added to a cell, making sure they don't overflow to other cells.
- Corner-pencilmarks are placed clock-wise around the cell.
- Conflict-highlighting: if the same digit exists in the same box, column or row, it will be highlighted with red. Same applies to Pencilmarks.
- Switching between normal digits and pencilmarks can be done via keyboard using SPACE (iterates through options), SHIFT (corner pencilmarks), CTRL (centre-pencilmarks).
- Can move throughout the grid using arrow-keys.
- Can multi-select using SHIFT + arrow-keys.
- Ability to shade cells using various colours.
- Undo and Redo which capture the full history of changes: normal digits, pencilmarks, colours.
- Ability to enter advanced sudoku symbols: X-V signs, Kropki dots, inequality signs.
- Reset button to clear everything off.


Auth:
- Ability to play puzzles as guest, without logging in.
- Some content (e.g. creating puzzles) locked for guests.
- Auth handled by AWS Cognito.
- Register an account with email, a verificiation code will be sent to that email, return to Sudoku app to enter code.
- Session tracking across multiple pages
- If logged in, all content is unlocked.

Puzzle saving:
- For signed-in users only.
- Handled by GraphQL API and stored in DynamoDB.
- Can set puzzle title, author and rules.

Not done, wishlist:
- Retrieve and play saved puzzles when navigating to "Play" page.
- Retrieve puzzles you've created, started or completed in the "My Puzzles" page.
- Don't allow someone to create a puzzle with the same name.
- Auto update statistics on Home page using data from Cognito and DynamoDB.
- Custom and public URL.
- Add more tests to cover all features.
