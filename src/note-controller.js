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
listModel.addNote('This is my note');
var listView = new ListView(listModel);
var element = document.getElementById('app');
var noteController = new NoteController(listView, element);

noteController.htmlInserter()
