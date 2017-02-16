function showsNotesListOnAPage(){
  console.log('showsNoteOnAPage')
  listModel = new List();
  dummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');
  var noteController = new NoteController(listView, dummyElement);
  noteController.htmlInserter()
  assert.isTrue(noteController.elem.innerHTML === '<ul><a href="note/12"><li><div>This is my note</div></li></a></ul>')
}

showsNotesListOnAPage();

function showSingleNoteOnAPage() {
  console.log('showSingleNoteOnAPage')
  note = new Note("test note")
  noteView = new NoteView(note)
  listModel = new List();
  dummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  var noteController = new NoteController(listView, dummyElement);
  noteController.singleNoteViewer(dummyElement, noteView)
  assert.isTrue(noteController.elem2.innerHTML === '<div>test note</div>')
}

showSingleNoteOnAPage();

function getNoteId(){
  console.log('getNoteId')
  listModel = new List();
  dummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');
  var noteController = new NoteController(listView, dummyElement);
  function LocationDouble(){
    this.hash = "#notes/0"
  }

  var location = new LocationDouble()
  console.log(location.hash)

  var returnedNote = noteController.getNoteFromURL(location)
  console.log(returnedNote)
  assert.isTrue(returnedNote._text === "This is my note")
}

getNoteId()
