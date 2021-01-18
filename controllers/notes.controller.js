
    
const Note = require('../models/note.model.js');
const notesModel = require('../models/notes.model.js');
// Create and Save a new Note
exports.create = (req, res) => {​​​​​
    // var note = new Note()
    // note.title = req.body.title
    // note.content = req.body.content

    // Note.insertOne(note)
    // .then( result => {console.log(result)})
    // .catch( err => { console.error(err)})
}​​​​​;
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {​​​​​
    
}​​​​​;
// Find a single note with a noteId
exports.findOne = (req, res) => {​​​​​
    Note.findById(req.params.noteId)
    .then( note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.send({ 
            message: "Note Found",
            data: note})
    })
    .catch( err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        })
    })
}​​​​​;
// Update a note identified by the noteId in the request
exports.update = (req, res) => {​​​​​
}​​​​​;
// Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {​​​​​
// }​​​​​;
    
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {​​​​​
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {​​​​​
        if(!note) {​​​​​
            return res.status(404).send({​​​​​
                message: "Note not found with id " + req.params.noteId
            }​​​​​);
        }​​​​​
        res.send({​​​​​message: "Note deleted successfully!"}​​​​​);
    }​​​​​).catch(err => {​​​​​
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {​​​​​
            return res.status(404).send({​​​​​
                message: "Note not found with id " + req.params.noteId
            }​​​​​);                
        }​​​​​
        return res.status(500).send({​​​​​
            message: "Could not delete note with id " + req.params.noteId
        }​​​​​);
    }​​​​​);
}​​​​​;
