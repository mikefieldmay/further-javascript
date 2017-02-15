function instantiatesSingleNoteView(){
  var note = new Note('This is my example note')
  var noteView = new NoteView(note)
  assert.isTrue(noteView._note === note)
}

instantiatesSingleNoteView()

function showsSingleNoteOnPage(){
  var note = new Note('This is my example note')
  var noteView = new NoteView(note)

  assert.isTrue(noteView.viewNote() === '<div>This is my example note</div>')
}

showsSingleNoteOnPage()
