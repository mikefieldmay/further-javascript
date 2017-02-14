(function(exports){

   function NoteController(noteListModel){
    noteListModel.addNote('This is my note');
    this.noteListView = new ListView(noteListModel);
  };

  NoteController.prototype.htmlInserter = function(){
    var elem = document.getElementById('app');
    elem.innerHTML = this.noteListView.viewNotes();
    console.log(elem.innerHTML);
    console.log(elem);

  };

  exports.NoteController = NoteController
})(this)
