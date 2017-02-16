function showsNotesListOnAPage(){
  console.log('showsNoteOnAPage')
  listModel = new List();
  dummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');
  var noteController = new NoteController(listView, dummyElement);
  noteController.htmlInserter()
  assert.isTrue(noteController.list.innerHTML === '<ul><a href="note/12"><li><div>This is my note</div></li></a></ul>')
}

showsNotesListOnAPage();

// function showSingleNoteOnAPage() {
//   console.log('showSingleNoteOnAPage')
//   note = new Note("test note")
//   noteView = new NoteView(note)
//   listModel = new List();
//   dummyElement = document.createElement('div')
//   var listView = new ListView(listModel)
//   var noteController = new NoteController(listView, dummyElement, dummyElement);
//   noteController.singleNoteViewer(noteView)
//   assert.isTrue(noteController.note.innerHTML === '<div>test note</div>')
// }
//
// showSingleNoteOnAPage();
//
// function getNoteId(){
//   console.log('getNoteId')
//   listModel = new List();
//   dummyElement = document.createElement('div')
//   var listView = new ListView(listModel)
//   listModel.addNote('This is my note');
//   var noteController = new NoteController(listView, dummyElement);
//   function LocationDouble(){
//     this.hash = "#notes/0"
//   }
//
//   var location = new LocationDouble()
//   var returnedNote = noteController.getNoteFromURL(location)
//   assert.isTrue(returnedNote._text === "This is my note")
// }
//
// getNoteId()

function showNoteOnPage(){
  console.log('showNoteOnPage')
  listModel = new List();
  dummyElement = document.createElement('div')
  otherDummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');
  var noteController = new NoteController(listView, dummyElement, otherDummyElement);
  function LocationDouble(){
    this.hash = "#notes/0"
  }
  var location = new LocationDouble()
  noteController.showNoteForCurrentPage(location)
  assert.isTrue(noteController.note.innerHTML === '<div>This is my note</div>')
}

showNoteOnPage()
