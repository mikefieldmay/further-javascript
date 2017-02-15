(function(exports){

   function NoteController(noteListModel, doc){
    noteListModel.addNote('This is my note');
    this.noteListView = new ListView(noteListModel);
    this.elem = doc.getElementById('app')
  };

  NoteController.prototype.htmlInserter = function(){
    this.elem.innerHTML = this.noteListView.viewNotes();
  };

  exports.NoteController = NoteController
})(this)
