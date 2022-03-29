# Google Speech-To-Text Snippet Redesign

This project was created With [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install node-modules and dependencies in the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Improvements

### The Original Snippet:

1.  Has all languages present in a row, when numbers of language increases, users have to horizontally scroll to view more language options.

2.  Has a TabPane/activeTab structure, when selected a language, instruction for installation appears below

### The New Snippet:

1. Has languages present in a section (many rows), which is able to contain more more language options when numbers of language increases.

2. When a language is selected, a modal with complete instruction for installation will appear in cennter of the page, allowing users to focus on the Instruction.

3. Allow users to search or type in the language they are using, so when their language choice is not available on the above section, they can find it by searching or tying the language, which will also make modal appears.
