var listModel = new List();
var listView = new ListView(listModel)
listModel.addNote('This is my note');
listModel.addNote('This is my second note');
listModel.addNote('This is my third note');
var list = document.getElementById('app');
var note = document.getElementById('note');
var noteController = new NoteController(listView, list, note, window.location);
noteController.htmlInserter()
console.log(1)
noteController.changeNoteByURL()
