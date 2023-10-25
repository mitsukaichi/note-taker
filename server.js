// Dependencies
// =============================================================
const express = require("express");
const path = require('path');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');
let noteData = require("./db/db.json");
const PORT = 3000; //placeholder until this is deployed in Heroku

// Sets up the Express App
// =============================================================
const app = express();

// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Routes
// =============================================================
app.use(express.static('public'));

// `GET /notes` should return the `notes.html` file.

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
  });

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

app.get('/api/notes',(req,res) => {
    return res.json(noteData);
  });

// `GET *` should return the `index.html` file.

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });


// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    let newNotes = {};
    newNotes.id = generateUniqueId();
    newNotes.title = req.body.title;
    newNotes.text = req.body.text;
    noteData.push(newNotes);
    fs.writeFile('./db/db.json',JSON.stringify(noteData),(err) =>
      err ? console.error(err) : console.log(noteData));
    // append the added task to the `db.json` file,
    res.json(noteData);
});

//`DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete("/api/notes/:id", function(req, res) {
    let deleteId = req.params.id;
    console.log("deleteId: "+ deleteId);
    for (let i = 0; i < noteData.length; i++){
        console.log("noteData[i].id "+ noteData[i].id);
        if (noteData[i].id === deleteId) {
            noteData.splice(i,1);
            console.log(noteData);
            break;
        };
    }
    fs.writeFile('./db/db.json',JSON.stringify(noteData),(err) =>
      err ? console.error(err) : console.log(noteData));
    res.json(noteData);
});

// Listen
// =============================================================

app.listen(PORT, () => {
    console.log(`Note taker listening at http://localhost:${PORT}`);
  });