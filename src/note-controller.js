(function(exports){

   function NoteController(listView, elem){
    this.noteListView = listView;
    this.elem = elem
  };

  NoteController.prototype.htmlInserter = function(){
    this.elem.innerHTML = this.noteListView.viewNotes();
  };

  NoteController.prototype.singleNoteViewer = function(element, noteView) {
    this.elem2 = element
    this.elem2.innerHTML = noteView.viewNote();
  };

  NoteController.prototype.getNoteFromURL = function (location) {
    console.log(location)
    var noteId = location.hash.split("#notes/")[1]
    console.log(noteId)
    console.log(this.noteListView._list)
    return this.noteListView._list[noteId]
  };

  exports.NoteController = NoteController
})(this)

// var listModel = new List();
// var listView = new ListView(listModel)
// listModel.addNote('This is my note');
// listModel.addNote('This is my second note');
// listModel.addNote('This is my third note');
// var elem = document.getElementById('app')
// var noteController = new NoteController(listView, elem);
// noteController.htmlInserter()
