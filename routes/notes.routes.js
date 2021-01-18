

module.exports = app => {
    notes = require("../controllers/notes.controller")

    app.post( '/notes', notes.create)

    app.get('/notes', notes.findAll)

    app.get('/notes/:noteId', notes.findOne)

    app.put('/notes/:noteId', note.update)

    app.delete('/notes/:noteId')
}