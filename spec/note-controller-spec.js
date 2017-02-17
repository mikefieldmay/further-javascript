function showsNotesListOnAPage(){
  console.log('showsNotesListOnAPage')
  listModel = new List();
  dummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');
  var noteController = new NoteController(listView, dummyElement);
  noteController.htmlInserter()
  assert.isTrue(noteController.list.innerHTML === '<ul><a href="#note/12"><li><div>This is my note</div></li></a></ul>')
}

showsNotesListOnAPage();

function showNoteOnPage(){
  console.log('showNoteOnPage')
  listModel = new List();
  dummyElement = document.createElement('div')
  otherDummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');

  function LocationDouble(){
    this.hash = "#note/0"
  }
  var location = new LocationDouble()

  var noteController = new NoteController(listView, dummyElement, otherDummyElement, location);

  noteController.showNoteForCurrentPage()
  assert.isTrue(noteController.note.innerHTML === '<div>This is my note</div>')
}

showNoteOnPage()
