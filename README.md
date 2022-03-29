# Google Speech-To-Text Snippet Redesign

This project was created With [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install node-modules and dependencies in the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Improvements

### The Original Snippet:

![Old Google Snippet](https://github.com/97-Jeffrey/google-widget-redesign/blob/master/Doc/Screen%20Shot%202022-03-29%20at%202.00.29%20PM.png?raw=true)

1.  Has all languages present in a row, when numbers of language increase, users have to scroll horizontally to view more language options.

2.  Has a TabPane/activeTab structure, when user selects a language, instruction for installation appears below

### The New Snippet:

![New Google Snippet](https://github.com/97-Jeffrey/google-widget-redesign/blob/master/Doc/Screen%20Shot%202022-03-29%20at%201.59.05%20PM.png?raw=true)

1. Has languages present in a section (many rows), which can contain more language options when numbers of language increase.

2. When a language is selected, a modal with complete instruction for installation will appear in center of the page, allowing users to focus on the Instruction.

3. Allow users to search or type in the language they are using, so when their language choice is not available on the above section, they can find it in the search section, which will also make instruction modal appear.
