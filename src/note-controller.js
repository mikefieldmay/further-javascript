(function(exports){

   function NoteController(listView, listElem, noteElem, location){
    this.noteListView = listView;
    this.list = listElem;
    this.note = noteElem;
    this.location = location
  };

  NoteController.prototype.htmlInserter = function(){
    this.list.innerHTML = this.noteListView.viewNotes();
  };

  NoteController.prototype.changeNoteByURL = function(window) {
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this),false)
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    noteView = new NoteView(this.getNoteFromURL())
    this.singleNoteViewer(noteView)
  };

  NoteController.prototype.getNoteFromURL = function() {
    var noteId = this.location.hash.split("#note/")[1]
    return this.noteListView.list()[noteId]
  };

  NoteController.prototype.singleNoteViewer = function(noteView) {
    this.note.innerHTML = noteView.viewNote();
  };

  exports.NoteController = NoteController
})(this)
