function showsNoteOnAPage(){
  console.log('showsNoteOnAPage')
  listModel = new List();
  dummyElement = document.createElement('div')
  var listView = new ListView(listModel)
  listModel.addNote('This is my note');
  var noteController = new NoteController(listView, dummyElement);
  noteController.htmlInserter()
  assert.isTrue(noteController.elem.innerHTML === '<ul><a href="note/12"><li><div>This is my note</div></li></a></ul>')
}

showsNoteOnAPage();
