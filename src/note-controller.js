(function(exports){

   function NoteController(listView, listElem, noteElem){
    this.noteListView = listView;
    this.list = listElem;
    this.note = noteElem;
  };

  NoteController.prototype.htmlInserter = function(){
    this.list.innerHTML = this.noteListView.viewNotes();
  };

  NoteController.prototype.changeNoteByURL = function(location) {
    window.addEventListener("hashchange", this.showNoteForCurrentPage(location))
  };

  NoteController.prototype.showNoteForCurrentPage = function(location) {
    noteView = new NoteView(this.getNoteFromURL(location))
    this.singleNoteViewer(noteView)
  };

  NoteController.prototype.getNoteFromURL = function(location) {
    var noteId = location.hash.split("#notes/")[1]
    return this.noteListView._list[noteId]
  };

  NoteController.prototype.singleNoteViewer = function(noteView) {
    this.note.innerHTML = noteView.viewNote();
  };

  exports.NoteController = NoteController
})(this)

var listModel = new List();
var listView = new ListView(listModel)
listModel.addNote('This is my note');
listModel.addNote('This is my second note');
listModel.addNote('This is my third note');
var list = document.getElementById('app');
var note = document.getElementById('note');
var noteController = new NoteController(listView, list, note);
noteController.htmlInserter()
noteController.changeNoteByURL()
