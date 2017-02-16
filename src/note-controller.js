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

var listModel = new List();
var listView = new ListView(listModel)
listModel.addNote('This is my note');
listModel.addNote('This is my second note');
listModel.addNote('This is my third note');
var elem = document.getElementById('app')
var noteController = new NoteController(listView, elem);
noteController.htmlInserter()
