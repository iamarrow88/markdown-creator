## User Name Entry Page Evaluation Criteria 20/20

- [ ] **Implementation of Input Fields and Login Button** (10/10) 

  - [ ] The user name entry page includes two separate input fields for the first name and surname.
  - [ ] Both input fields are configured as mandatory for form submission.
  - [ ] A 'Login' button is present and appropriately positioned on the page.
  - [ ] The input fields and 'Login' button are styled for clear visibility and user interaction.

- [ ] **Comprehensive Field Validation** (10/10)
      - [ ] The first name and surname input fields only accept English alphabet letters and the hyphen.
      - [ ] The first letter of each input field is validated to be uppercase.
      - [ ] The first name field requires a minimum of 3 characters, and the surname field requires at least 4 characters.
      - [ ] Appropriate error messages are displayed for each validation failure.
  
## Access and Session Management Evaluation Criteria 10/10

- [ ] **Local Storage for User Credentials** (5/5)
  - [ ] The user's first name and surname are captured and stored in local storage upon form submission.
  - [ ] The data persists in local storage across page reloads and browser sessions.

- [ ] **Access Control and Logout Functionality** (5/5)
  - [ ] Only users verified through local storage credentials gain access to the main application features, with logged-in users immediately proceeding to the start screen.
  - [ ] Logout functionality effectively erases user data from local storage and redirects to the login interface.
  - [ ] The logout process is user-friendly, featuring an intuitive and easily navigable interface.

## Start Screen Evaluation Criteria 15/15

- [ ] **Start Screen Content** (10/10)
  - [ ] The start screen prominently displays the application's name in a style consistent with the game's theme.
  - [ ] A brief description of the game is present and effectively communicates what the game is about.
  - [ ] The screen's design is visually appealing, with a clear layout and thematic graphic elements.
  - [ ] The overall presentation aligns with the application's design and branding.
  - [ ] A personalized greeting that includes the user's first name and surname is displayed upon accessing the application.
  - [ ] The first name and surname is retrieved from local storage.
  - [ ] The greeting is styled and positioned to be easily noticeable and aligns with the overall design of the application.

- [ ] **Navigation from Start** Screen (5/5)
  - [ ] A 'Start' button is prominently displayed on the start screen.
  - [ ] Clicking the button navigates the user to the main game page.
  - [ ] The button's design is consistent with the game's overall aesthetic.

## Basic Game Functionality Evaluation Criteria 80/80
- [ ] **Word Cards Randomization and Interaction** (10/10)
  - [ ] Word cards representing individual words of a sentence are displayed in a random order in the source data block.
  - [ ] Users can click on these cards to move them to the result block in the order they are clicked.
- [ ] **Dynamic Word Card Sizing** (5/5) 
  - [ ] Each word card dynamically adjusts its size to match the length of the word it represents.
- [ ] **Reordering and Returning Word Cards to Source Data Block** (5/5)
  - [ ] Users can click on word cards in the result block to move them back to the source data block.
  - [ ] The order of returned cards in the source block is maintained based on the click sequence.
  - [ ] Visual feedback is provided for interactions with the word cards.
  - [ ] The feature enhances the overall interactivity and flexibility of the game.
- [ ] **Sentence Transition and Round Completion** (10/10)
    - [ ] Borders and text on word cards fade away upon correct assembly of all sentences in a round.
    - [ ] The background image is fully revealed after the fade effect.
    - [ ] Brief information about the image is displayed in a clear and interactive manner.
    - [ ] Borders and text on word cards fade away upon correct assembly of all sentences in a round.
    - [ ] The background image is fully revealed after the fade effect.
    - [ ] Brief information about the image is displayed in a clear and interactive manner.
    - [ ] The 'Continue' button is initially disabled or hidden, becoming active only after a sentence is correctly assembled.
    - [ ] The game accurately verifies the sentence assembly before enabling the 'Continue' button.
    - [ ] On clicking 'Continue', ensure seamless transitions either to the next sentence, the background image reveal, or to the next round, enhancing the overall user experience.
- [ ] **Sentence Assembly Verification** (10/10)
  - [ ] A 'Check' button is present and becomes active/visible only when all words are placed in the result block.
  - [ ] Pressing the button activates a sentence verification process.
  - [ ] Clear visual feedback is provided on the correctness of the word order in the sentence.
- [ ] **'Check' to 'Continue' Button Transformation** (5/5)
  - [ ] The 'Check' button becomes a 'Continue' button after the player assembles a sentence correctly.
  - [ ] Visual feedback clearly indicates the button's transformation.
  - [ ] The 'Continue' button leads to either the background image revelation screen (RSS-PZ-28) or the next round, based on game progression and feature implementation.
- [ ] **Automatic Sentence Completion Functionality** (5/5)
  - [ ] An 'Auto-Complete' button is available in the game interface.
  - [ ] Clicking the button automatically arranges words into the correct sentence order in the result block.
  - [ ] The feature provides clear visual and interactive feedback during and after its activation.
- [ ] **Drag-and-Drop Functionality** (15/15)
  - [ ] Word cards are draggable and can be moved between the source data block and the result block.
  - [ ] Players can rearrange words within the result block by dragging them.
  - [ ] Visual feedback is provided throughout the drag-and-drop process.
  - [ ] Words return to their original position if dropped in an invalid location.
- [ ] **Puzzle-Like Word Card Design** (15/15)
  - [ ] Word cards are designed to look like interlocking puzzle pieces.
  - [ ] The puzzle pieces visually and interactively 'snap' together when forming sentences.

## **Hint Functionality Evaluation Criteria** 60/60
- [ ] **Translation Hint Implementation and Toggle Functionality** (10/10)
  - [ ] A feature is available for players to access the translation of the sentence being assembled.
  - [ ] The translation hint is presented in a non-intrusive, user-friendly manner.
  - [ ] A toggle switch or button is available for players to control the visibility of the translation hint.
  - [ ] The translation hint's behavior aligns with the player's choice: immediate visibility or post-assembly reveal.
  - [ ] Clear visual and interactive feedback is provided to indicate the current state of the hint.
- [ ] **Pronunciation Hint Implementation and Interactive Audio Icon** (20/20)
  - [ ] A pronunciation hint feature is available and easily accessible in the game.
  - [ ] Clicking the control plays the correct pronunciation of the sentence being assembled.
  - [ ] The feature is integrated in a way that is cohesive with the overall design and user experience of the game.
  - [ ] The audio icon in the hint block changes its style during pronunciation playback.
  - [ ] The style change clearly indicates when the audio is playing and stops when the audio ends.
  - [ ] The icon's design is intuitive, accessible, and well-integrated into the game's UI.
  - [ ] The game includes a toggle or button to control the visibility of the pronunciation hint.
  - [ ] The pronunciation hint behaves according to the toggle state: visible immediately with the sentence or only after correct assembly.
  - [ ] Visual feedback clearly indicates the current state of the pronunciation hint.
- [ ] **Background Image Puzzle Hint** (25/25)
  - [ ] Word cards feature segments of a larger background image.
    Each sentence corresponds to a different segment of the larger image, gradually revealing it as players progress.
  - [ ] The design of the word cards ensures that the text is readable against the image background.
  - [ ] The assembly of word cards in the correct order visually aligns the segments to form a coherent part of the larger image.
  - [ ] A toggle option is available for players to control the visibility of background images on word cards.
  - [ ] The background images on word cards are displayed based on the toggle state - immediately visible or only after sentence assembly.
  - [ ] Clear feedback is provided to indicate the current state of the background image hint.
- [ ]  **Hint State Persistence and Default Settings** (5/5)
  - [ ]  The state of each hint (enabled/disabled) is saved in the browser's local storage.
  - [ ]  All hints are enabled by default for a new game or when no saved state exists.
  - [ ]  Hint states are reset to default upon user logout.

## Level and Round Selection Evaluation Criteria 25/25
- [ ] **Difficulty Level and Round Selection** (10/10)
  - [ ] Players can choose from six distinct difficulty levels.
  - [ ] The number of game rounds is determined based on the selected difficulty level or round and source collection data.
  - [ ] The game interface adapts accordingly to reflect the chosen level and round.
  - [ ] Upon selection, the game immediately restarts with the new difficulty appropriate data for the level and round.
- [ ] **Visual Differentiation of Completed Rounds** (10/10)
  - [ ] Completed and pending rounds within each difficulty level are clearly indicated, possibly through color-coded font if using a dropdown menu.
  - [ ] Levels that are fully completed are visually distinct from those that are not.
  - [ ] The visual indicators are dynamically updated based on the player’s progress.
  - [ ] The design of these indicators is consistent, accessible, and seamlessly integrated into the game’s interface.
- [ ] **Persistence and Continuation of Last Round** (5/5)
  - [ ] The game saves the player's last completed round and level in local storage.
  - [ ] Upon game restart, it automatically resumes from the next round or the appropriate difficulty level.
  - [ ] Clear indications are provided to the player regarding their resumed progress.
  - [ ] The game handles the transition from the last round of a level or the highest level seamlessly.

## Completion and Revelation of Background Image Evaluation Criteria 10/10
- [ ] **Background Image Revelation and Information Display** (5/5)
  - [ ] Borders and text on word cards fade away upon correct assembly of all sentences in a round.
  - [ ] The background image is fully revealed after the fade effect.
  - [ ] Brief information about the image is displayed in a clear and interactive manner.
- [ ] **Transition to Next Round or Results Screen** (5/5)
  - [ ] 'Results' and 'Continue' buttons are displayed upon completing all ten sentences of a round.
  - [ ] The 'Results' button navigates to a detailed view of the player's performance statistics.
  - [ ] 'Continue' allows for smooth progression to the next round, with both buttons being easily distinguishable.

## Statistics Page Evaluation Criteria 25/25
- [ ] **Navigation from Statistics Page** (5/5)
  - [ ] A button with a clear label ('Continue' or similar) is present on the statistics page.
  - [ ] Clicking the button transitions the player to the next round of the game.
  - [ ] The button design is harmonious with the game's overall aesthetic and user interface.
- [ ] **Categorization of Sentences** (10/10)
  - [ ] Two distinct sections are present on the statistics page: one for 'Known' sentences and one for 'Unknown' sentences.
  - [ ] Sentences are correctly categorized based on the player's performance.
  - [ ] The sections are visually distinct and labeled appropriately.
- [ ] **Round Sentences and Audio Pronunciation Feature** (5/5)
  - [ ] All sentences from the completed round are displayed on the statistics page, each with an audio icon.
  - [ ] Clicking an audio icon plays the pronunciation of the associated sentence.
- [ ] **Miniature Artwork Display** (5/5)
  - [ ] A miniature of the artwork assembled in the round is displayed on the statistics page.
  - [ ] The miniature is accompanied by basic information about the artwork.

  ##Penalties for Cross-Check Evaluation

- Non-Empty Body in index.html ()
- Responsive Design Requirement ()
