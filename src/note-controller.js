(function(exports){

   function NoteController(listView, elem){
    this.noteListView = listView;
    this.elem = elem
  };

  NoteController.prototype.htmlInserter = function(){
    this.elem.innerHTML = this.noteListView.viewNotes();
  };

  exports.NoteController = NoteController
})(this)
