const getNotes = function() {
    return 'Your notes ..'
 }

 const saveNotes = function(notes){
    const dataJSON = JSON.stringify(saveNotes)
    fs.writeFileSync('notes.json',dataJSON)
}



    
const addNote = function(title, body){
    const notes = loadNotes()
    //console.log(notes)
    notes.push({
     title: title,
     body: body
     })
     saveNotes(notes)

  }
  const loadNotes = function() {
    try {
     const dataBuffer = fs.readFileSync('notes.json')
     const dataJSON = dataBuffer.toString()
     if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added');
    } else {
        console.log('Title is taken')
    }


     return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }

    
  }

  const duplicateNotes = notes.filter(function(note){
    return note.title ===title// quality operator - zero items if no duplicates
})

         
  
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}