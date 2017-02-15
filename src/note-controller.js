(function(exports){

   function NoteController(listView, elem){
    this.noteListView = listView;
    this.elem = elem
  };

  NoteController.prototype.htmlInserter = function(){
    this.elem.innerHTML = this.noteListView.viewNotes();
    console.log(this.elem.innerHTML)
  };

  exports.NoteController = NoteController
})(this)
