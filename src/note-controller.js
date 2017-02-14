(function(exports){

   function NoteController(noteListModel){
    noteListModel.addNote('This is my note');
    this.noteListView = new ListView(noteListModel);
  };

  NoteController.prototype.htmlInserter = function(){
    this.elem = document.getElementById('app');
    this.elem.innerHTML = this.noteListView.viewNotes();
  };

  exports.NoteController = NoteController
})(this)
