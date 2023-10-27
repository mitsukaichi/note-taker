# note-taker

## About this project

This project is done as one of the assignments of the UC Berkeley Full Stuck web developer coding bootcamp. The goal of this assigment is  to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created and I built the back end, connect that with the provided frontend, and then deploy the entire application to Heroku.

The application needs to meet the following criteria: 

- notes page shows existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- user can enter a new note title and the note’s text and a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- upon click of the SAVE button, the entered note appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
- when user click on an existing note in the list in the left-hand column, that note appears in the right-hand column and a "New Note" button appears in the navigation
- when user click on the "New Note" button in the navigation at the top of the page, it shows empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Use

- Deployed at: https://damp-reaches-37213-ccd18dc55072.herokuapp.com/
- [screenshot](https://github.com/mitsukaichi/SVG-Logo-Maker/assets/45612744/abc35de7-60dc-41f4-8cc3-7c83cef18dbb)

## Resources 
- [npm package: Generate Unique ID](https://www.npmjs.com/package/generate-unique-id?activeTab=readme)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#introduction)

## Things I learnt in this challenge

- Use [optional space parameter in JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to make the modified json file prettier
- Use [splice() method of array in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the element not at the beginning or end of an array
- How to deploy the web application using Heroku

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.