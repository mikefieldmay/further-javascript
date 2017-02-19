function noteTest(){

  console.log('%cNote Test', 'color: blue')
  // the note instantiates with a string of text stored within a text property on the note an return the note text when requested
  function newNoteInstantiatesWithString() {
    console.log('New Note instantiates with string')
    var newNote = new Note("string of text");
    assert.isTrue(newNote.text() === "string of text");
  };

  newNoteInstantiatesWithString();

  function newNoteHasUniqueID() {
    console.log('New note has a unique id')
    var note1 = new Note
    var note2 = new Note
    assert.isTrue(note1.id === 1)
    assert.isTrue(note2.id === 2)
  }

  newNoteHasUniqueID()
}

noteTest()
